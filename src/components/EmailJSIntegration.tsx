import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

interface CachedField {
  label: string;
  value: string;
  type: string;
}

export const EmailJSIntegration: React.FC = () => {
  // Store typed values globally by field key (to preserve unmounted step-by-step values)
  const inputCache = useRef<Record<string, CachedField>>({});

  useEffect(() => {
    // Initialize EmailJS with the Public Key
    emailjs.init('zCNs2DnlLDNGVQtjF');

    // Listener to cache inputs dynamically on keystroke/blur/selection
    const handleGlobalInput = (event: Event) => {
      const input = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      if (!input || !input.tagName) return;

      const tagName = input.tagName.toLowerCase();
      if (tagName !== 'input' && tagName !== 'select' && tagName !== 'textarea') return;
      if (input.type === 'password' || input.type === 'submit' || input.type === 'button') return;

      let value = '';
      if (input.type === 'checkbox') {
        value = (input as HTMLInputElement).checked ? 'Yes' : 'No';
      } else if (input.type === 'radio') {
        if (!(input as HTMLInputElement).checked) return;
        value = input.value;
      } else {
        value = input.value;
      }

      // Identify label or placeholder or key name
      const placeholder = 'placeholder' in input ? (input as HTMLInputElement | HTMLTextAreaElement).placeholder || '' : '';
      let label = '';
      if (input.id) {
        const labelEl = document.querySelector(`label[for="${input.id}"]`);
        if (labelEl) label = labelEl.textContent?.trim() || '';
      }
      if (!label) {
        const parentLabel = input.closest('label');
        if (parentLabel) label = parentLabel.textContent?.trim() || '';
      }
      if (!label && placeholder) {
        label = placeholder;
      }

      const key = input.name || input.id || label || input.type || 'Field';
      if (!key) return;

      inputCache.current[key] = {
        label: label || key,
        value,
        type: input.type
      };
    };

    // Listen to change/input/blur to be 100% reliable
    document.addEventListener('input', handleGlobalInput, true);
    document.addEventListener('change', handleGlobalInput, true);

    // Clear cache when pathname changes to keep inputs clean across separate service navigations
    let lastPathname = window.location.pathname;
    const pathCheckInterval = setInterval(() => {
      if (window.location.pathname !== lastPathname) {
        lastPathname = window.location.pathname;
        inputCache.current = {};
        console.log('[EmailJS] Cleared input cache due to page navigation.');
      }
    }, 1000);

    const handleGlobalFormSubmit = async (event: Event) => {
      const form = event.target as HTMLFormElement;
      if (!form || form.nodeName !== 'FORM') return;

      // Skip authentication forms
      const formText = form.textContent?.toLowerCase() || '';
      const isAuthForm = (formText.includes('login') || formText.includes('sign in')) && formText.includes('password');
      if (isAuthForm) return;

      // Also parse currently visible inputs on submission to overwrite cache with latest values
      const currentInputs = form.querySelectorAll('input, select, textarea');
      currentInputs.forEach((el) => {
        const input = el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        if (input.type === 'submit' || input.type === 'button') return;

        let value = '';
        if (input.type === 'checkbox') {
          value = (input as HTMLInputElement).checked ? 'Yes' : 'No';
        } else if (input.type === 'radio') {
          if (!(input as HTMLInputElement).checked) return;
          value = input.value;
        } else {
          value = input.value;
        }

        const placeholder = 'placeholder' in input ? (input as HTMLInputElement | HTMLTextAreaElement).placeholder || '' : '';
        let label = '';
        if (input.id) {
          const labelEl = form.querySelector(`label[for="${input.id}"]`);
          if (labelEl) label = labelEl.textContent?.trim() || '';
        }
        if (!label) {
          const parentLabel = input.closest('label');
          if (parentLabel) label = parentLabel.textContent?.trim() || '';
        }
        if (!label && placeholder) {
          label = placeholder;
        }

        const key = input.name || input.id || label || input.type || 'Field';
        if (key && value) {
          inputCache.current[key] = {
            label: label || key,
            value,
            type: input.type
          };
        }
      });

      // Track if window.alert is shown (signals captcha/form validation failed)
      let alertTriggered = false;
      const originalAlert = window.alert;
      window.alert = (msg) => {
        alertTriggered = true;
        originalAlert(msg);
      };

      // Compile current state parameters right now
      const extractedParams = resolveCachedFields();

      // Short delay to let the React code perform validation, captcha assessment and updates
      setTimeout(async () => {
        window.alert = originalAlert;

        if (alertTriggered) {
          console.log('[EmailJS] Submission blocked because validation window.alert was triggered.');
          return;
        }

        // Check for visible error components
        const errorEl = form.querySelector('.text-rose-600, .text-rose-500, .text-red-600, .text-red-500, [role="alert"]');
        if (errorEl && errorEl.textContent) {
          console.log('[EmailJS] Submission blocked due to active validation error in the form:', errorEl.textContent);
          return;
        }

        const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
        
        // Form is successfully submitted if: button is disabled/submitting, OR unmounted, OR success message is rendered in the body.
        const isButtonDisabled = submitBtn?.disabled;
        const isFormUnmounted = !form.isConnected;
        const bodyText = document.body.textContent?.toLowerCase() || '';
        const hasSuccessMessage = bodyText.includes('thank you') || 
                                 bodyText.includes('successfully submitted') ||
                                 bodyText.includes('assigned to your profile') ||
                                 bodyText.includes('brochure will begin downloading') ||
                                 bodyText.includes('request received');

        const isValidSubmit = isButtonDisabled || isFormUnmounted || hasSuccessMessage;

        if (!isValidSubmit) {
          console.log('[EmailJS] Form submit bypassed (did not trigger submit state or pass validation yet).');
          return;
        }

        // Output final details object to console as requested in Requirement #3
        console.log('[EmailJS] Sending complete lead to EmailJS. Template parameters map:', extractedParams);

        if (submitBtn) {
          submitBtn.disabled = true;
        }

        try {
          const response = await emailjs.send(
            'service_19ut998',
            'template_tfpdtvp',
            extractedParams,
            'zCNs2DnlLDNGVQtjF'
          );
          console.log('[EmailJS] Notification successfully delivered to admin email! Status:', response.status, response.text);
          // Clear cache on successful delivery
          inputCache.current = {};
        } catch (error) {
          console.error('[EmailJS] Error delivering email notification:', error);
        } finally {
          if (submitBtn && form.isConnected) {
            submitBtn.disabled = false;
          }
        }
      }, 180);
    };

    document.addEventListener('submit', handleGlobalFormSubmit, true);

    return () => {
      document.removeEventListener('input', handleGlobalInput, true);
      document.removeEventListener('change', handleGlobalInput, true);
      document.removeEventListener('submit', handleGlobalFormSubmit, true);
      clearInterval(pathCheckInterval);
    };
  }, []);

  // Map all cached multi-step inputs to matched variables
  const resolveCachedFields = () => {
    const fieldsData: Record<string, string> = {};
    const allFieldList: { label: string; value: string }[] = [];

    Object.keys(inputCache.current).forEach((key) => {
      const item = inputCache.current[key];
      // Skip Captcha fields
      const isCaptcha = key.toLowerCase().includes('captcha') || 
                        item.label.toLowerCase().includes('captcha');
      if (isCaptcha) return;

      const cleanLabel = item.label.replace(/\*/g, '').trim();
      allFieldList.push({ label: cleanLabel, value: item.value });

      const keyLower = key.toLowerCase();
      const labelLower = item.label.toLowerCase();
      const searchStr = `${keyLower} ${labelLower}`.trim();

      if (searchStr.includes('email')) {
        fieldsData['email'] = item.value;
      } else if (searchStr.includes('phone') || searchStr.includes('mobile') || searchStr.includes('tel') || searchStr.includes('contact') || searchStr.includes('number')) {
        if (!searchStr.includes('pan') && !searchStr.includes('gst') && !searchStr.includes('tan') && !searchStr.includes('cin')) {
          fieldsData['phone'] = item.value;
        } else {
          fieldsData[key] = item.value;
        }
      } else if (searchStr.includes('name') || searchStr.includes('fullname') || searchStr.includes('applicant') || searchStr.includes('member')) {
        fieldsData['name'] = item.value;
      } else if (searchStr.includes('message') || searchStr.includes('query') || searchStr.includes('subject') || searchStr.includes('description') || searchStr.includes('detail')) {
        fieldsData['message'] = item.value;
      } else if (searchStr.includes('state')) {
        fieldsData['state'] = item.value;
      } else if (searchStr.includes('business type') || searchStr.includes('businesstype')) {
        fieldsData['businessType'] = item.value;
      } else if (searchStr.includes('activity') || searchStr.includes('businessactivity')) {
        fieldsData['businessActivity'] = item.value;
      } else {
        fieldsData[key] = item.value;
      }
    });

    // Structure beautiful details string
    let detailsText = '';
    allFieldList.forEach((f) => {
      detailsText += `${f.label}: ${f.value}\n`;
    });

    fieldsData['details'] = detailsText;
    fieldsData['message_details'] = detailsText;
    
    // Set variables to match the EmailJS templates (both standard and specific formats)
    fieldsData['from_name'] = fieldsData['name'] || 'N/A';
    fieldsData['from_email'] = fieldsData['email'] || 'N/A';
    fieldsData['contact_number'] = fieldsData['phone'] || 'N/A';
    
    if (!fieldsData['name']) fieldsData['name'] = 'N/A';
    if (!fieldsData['email']) fieldsData['email'] = 'N/A';
    if (!fieldsData['phone']) fieldsData['phone'] = 'N/A';

    // Ensure the main message payload includes everything
    fieldsData['message'] = `--- Website Form Submission ---\n\n${detailsText}\nSubmitted at: ${new Date().toLocaleString()}\nPage Title: ${document.title}\nPage URL: ${window.location.href}`;

    // Extra template variable support
    fieldsData['page_url'] = window.location.href;
    fieldsData['page_title'] = document.title;

    return fieldsData;
  };

  return null;
};
