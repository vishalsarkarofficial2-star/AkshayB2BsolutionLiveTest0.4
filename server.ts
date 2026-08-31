import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import compression from 'compression';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Enable gzip/deflate compression for optimal transfer sizes
  app.use(compression());

  app.use(express.json());

  // Lazy initialize Gemini client safely
  const getGeminiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("Warning: GEMINI_API_KEY is not defined. Chatbot will use premium fallback guidance.");
      return null;
    }
    return new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  };

  const ai = getGeminiClient();

  const SYSTEM_INSTRUCTION = `
You are the elite AI Business Consultant & Chatbot for "akshayb2bsolutions" (AKSHAYB2BSOLUTIONS Private Limited).
Your objective is to guide website visitors with utmost clarity, answer inquiries about our services, and offer expert help on company registration, compliance, and tax filing in India.

About the Company:
- Legal Name: AKSHAYB2BSOLUTIONS Private Limited
- Tagline: "make paper work"
- Corporate Identification Number (CIN): U70200UP2026PTC251575
- Contacts: Phone: +91 97180 04839 (Email: contact@akshayb2bsolutions.com)
- Working Hours: Monday to Saturday, 09:00 AM to 07:00 PM (Closed on Sundays)
- Head Office: Noida, Uttar Pradesh. Branches in Kanpur & Raebareli, Uttar Pradesh.
- Core Offerings:
  1. Business Registrations: Private Limited Company (Pvt Ltd), Limited Liability Partnership (LLP), One Person Company (OPC), Sole Proprietorship, Partnership Firm, Trust, Society, Section 8 NGO, Producer Company.
  2. Tax Compliance: GST Registration & Filing, TDS Returns, Income Tax Returns (ITR), Corporate Tax, LUT registration.
  3. Import & Export: RCMC Registrations (Spice Board, FIEO, Coffee Board, Tea Board, APEDA, MPEDA, AEPC, Pharmexcil, EEPC, CHEMEXCIL, CAPEXIL, Plexconcil, HEPC, CEPCI, GJEPC).
  4. Licenses: FSSAI (Central, State, Registration), FSSAI Returns/Renewals, ISO 22000, CDb Registration, Lut, EPR E-Waste, Make In India, Startup India, CSR-1, Darpan NGO, ISBN.
  5. Custom Software & Tech: Business website development, custom CRM development, app development, and bespoke software systems.

Your Conversational Character:
- Keep answers professional, crisp, encouraging, and highly accurate.
- Use simple bullet points to make structured offerings extremely readable.
- If they ask for pricing or customized quotes, invite them to share their requirement or call us at +91 97180 04839 for a direct consultation.
- Since we handle liaison, vetting, and processing smoothly, reassure them that they can sit back and focus on their core product while "akshayb2bsolutions" handles the paperwork!
`;

  // API endpoint for chatbot
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      if (!ai) {
        return res.json({
          text: "Hello! Welcome to AKSHAYB2BSOLUTIONS Private Limited. We make paperwork completely seamless! To discuss your business setup, GST, FSSAI, RCMC export registration, or custom software requirements, please feel free to reach out to our team directly at +91 97180 04839 or email contact@akshayb2bsolutions.com. How can I help you today?"
        });
      }

      // Convert history to structure supported by generateContent
      const contents = [];
      if (history && Array.isArray(history)) {
        history.forEach((h: any) => {
          contents.push({
            role: h.role === 'user' ? 'user' : 'model',
            parts: [{ text: h.text }]
          });
        });
      }
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      res.json({ text: response.text || "I'm happy to help! Let me know what compliance or registration services you need details on." });
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      res.status(500).json({ error: 'Failed to process chat response' });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    // Implement long-term static asset caching for hashed production assets
    app.use(express.static(distPath, {
      maxAge: '1y',
      immutable: true,
      setHeaders: (res, filePath) => {
        if (filePath.endsWith('.html') || filePath.endsWith('index.html')) {
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        }
      }
    }));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
