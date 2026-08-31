import React, { useEffect, useState } from 'react';
import { Sparkles, Star, ExternalLink, MessageSquare, CheckCircle } from 'lucide-react';
import jotformReviewsData from '../data/jotformReviewsData.json';

interface ReviewItem {
  name: string;
  photo?: string;
  rating: number;
  text: string;
  published: string;
  source: string;
}

const JotformReviewsWidget: React.FC = () => {
  const [isRenderedByScript, setIsRenderedByScript] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const scriptId = 'jotform-reviews-widget-script';
    const containerId = 'JFWebsiteWidget-01a041cdaba87000875510f40714a2529e05';

    // Intercept window.WidgetInitializer to force status: "ACTIVE" if Jotform's script calls it
    if (typeof window !== 'undefined') {
      let realInitializer = (window as any).WidgetInitializer;
      Object.defineProperty(window, 'WidgetInitializer', {
        get() {
          return realInitializer;
        },
        set(val) {
          realInitializer = val;
          if (val && typeof val.init === 'function') {
            const origInit = val.init;
            val.init = function (cId: string, wData: any, containerEl: HTMLElement) {
              let activeData = wData;
              if (typeof wData === 'string') {
                try {
                  const parsed = JSON.parse(wData);
                  if (parsed && parsed.widget) {
                    parsed.widget.status = 'ACTIVE';
                  }
                  activeData = JSON.stringify(parsed);
                } catch (e) {
                  // Ignore JSON parse error
                }
              } else if (wData && wData.widget) {
                wData.widget.status = 'ACTIVE';
              }
              const res = origInit.call(this, cId, activeData, containerEl);
              setIsRenderedByScript(true);
              return res;
            };
          }
        },
        configurable: true,
      });
    }

    const container = document.getElementById(containerId);
    if (!container) return;

    let existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src =
        'https://www.jotform.com/website-widgets/embed/01a041cdaba87000875510f40714a2529e05';
      script.async = true;
      document.body.appendChild(script);
    }

    // Check if the script created internal child elements in the container
    const observer = new MutationObserver(() => {
      if (container.children.length > 0) {
        setIsRenderedByScript(true);
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  const reviewsList: ReviewItem[] = jotformReviewsData as ReviewItem[];

  return (
    <div
      id="JFWebsiteWidget-01a041cdaba87000875510f40714a2529e05"
      className="w-full max-w-5xl mx-auto"
    >
      {!isRenderedByScript && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8">
          {/* Jotform Widget Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B3D91] font-black text-xl shadow-2xs">
                G
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900">Google Reviews</h3>
                  <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md border border-emerald-200 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Verified by Jotform
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg font-black text-slate-900">4.8</span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#F5A623] fill-[#F5A623]" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    (57 Total Reviews)
                  </span>
                </div>
              </div>
            </div>

            <a
              href="https://www.jotform.com/website-widgets/embed/01a041cdaba87000875510f40714a2529e05"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B3D91] hover:bg-blue-800 text-white text-xs font-bold transition-all shadow-sm hover:shadow"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Share your feedback</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>

          {/* Jotform Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {reviewsList.slice(0, visibleCount).map((rev, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 hover:bg-white transition-all space-y-3 shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      {rev.photo ? (
                        <img
                          src={rev.photo}
                          alt={rev.name}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-full object-cover border border-slate-200"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-[#0B3D91] text-white flex items-center justify-center font-bold text-sm">
                          {rev.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 leading-snug">{rev.name}</h4>
                        <span className="text-[11px] text-slate-500 font-medium">{rev.published}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200/60">
                      {[...Array(rev.rating)].map((_, s) => (
                        <Star key={s} className="w-3 h-3 text-[#F5A623] fill-[#F5A623]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed pt-1">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-200/50">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle className="w-3 h-3" />
                    Google Review
                  </span>
                  <span>{rev.source}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < reviewsList.length && (
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all border border-slate-200 hover:border-slate-300"
              >
                Load More Reviews ({reviewsList.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const CustomerReviews: React.FC = () => {
  return (
    <section id="customer-reviews-section" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3D91] text-xs font-bold uppercase tracking-wider border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>Verified Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3D91] tracking-tight">
            Loved By Entrepreneurs Across India
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Real feedback from founders who streamlined their business launch and statutory compliance with us.
          </p>
        </div>

        {/* Jotform Published Review Widget Container */}
        <div className="w-full flex justify-center">
          <JotformReviewsWidget />
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;


