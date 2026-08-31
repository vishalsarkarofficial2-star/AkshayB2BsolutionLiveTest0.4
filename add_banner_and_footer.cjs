const fs = require('fs');
const path = require('path');

const directoryPath = 'src/pages/services';
const targetFiles = fs.readdirSync(directoryPath).filter(file => file.endsWith('.tsx') && file !== 'index.tsx');

const bannerAndFooter = `
        {/* 22. MOBILE APP PROMOTION BANNER */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-r from-[#0B3D91] via-[#0D47A1] to-[#082a66] text-white rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
              {/* Ambient decoration */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-400/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

              <div className="space-y-4 max-w-md relative z-10">
                <span className="text-xs font-black uppercase tracking-wider text-[#FF5A00] bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  Compliance on Mobile
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Track Your Business Registration in Real-Time
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Download the akshayb2bsolutions mobile application for iOS &amp; Android. Access your incorporation certificates, GST returns, and get direct CA chat support 24x7.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105 active:scale-95 duration-200"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Get it on Google Play"
                      className="h-10 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105 active:scale-95 duration-200"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="Download on the App Store"
                      className="h-10 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                </div>
              </div>

              <div className="relative z-10">
                <img
                  src="Applogo.png"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      '/Applogo.png';
                  }}
                  alt="Compliance Mobile App"
                  className="w-48 h-auto object-contain rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 23. SITEMAP FOOTER WITH MANDATORY DISCLAIMER */}
      <Footer onSelectService={onSelectService} />
    </div>
  );
};`;

targetFiles.forEach(file => {
  const filePath = path.join(directoryPath, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already has banner/footer
  if (content.includes('{/* 22. MOBILE APP PROMOTION BANNER */}')) return;

  // Add imports
  if (!content.includes('import { MobileAppBanner }')) {
    content = content.replace("import { HeaderMegaMenu } from '../../components/HeaderMegaMenu';", "import { HeaderMegaMenu } from '../../components/HeaderMegaMenu';\nimport { MobileAppBanner } from '../../components/MobileAppBanner';\nimport { Footer } from '../../components/Footer';");
  }

  // Remove old main closing tag and everything else if it exists before appending
  // This is a bit complex. Let's find the closing tags of the main content
  const lastMain = content.lastIndexOf('</main>');
  if (lastMain !== -1) {
    content = content.substring(0, lastMain) + bannerAndFooter;
    fs.writeFileSync(filePath, content);
    console.log('Updated', filePath);
  } else {
    console.log('Could not find </main> in', filePath);
  }
});
