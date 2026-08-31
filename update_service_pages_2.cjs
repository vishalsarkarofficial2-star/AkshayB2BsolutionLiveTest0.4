const fs = require('fs');

const targetFiles = [
  'src/pages/services/FssaiRegistrationPage.tsx',
  'src/pages/services/ShopAndEstablishmentCertificatePage.tsx',
  'src/pages/services/TradeLicensePage.tsx',
  'src/pages/services/MakeInIndiaRegistrationPage.tsx',
  'src/pages/services/NsicRegistrationPage.tsx',
  'src/pages/services/IsbnRegistrationPage.tsx',
  'src/pages/services/ReraRegistrationPage.tsx',
  'src/pages/services/PoshCompliancePage.tsx',
];

targetFiles.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Add imports if missing
  if (!content.includes('import { MobileAppBanner }')) {
    content = content.replace("import { HeaderMegaMenu } from '../../components/HeaderMegaMenu';", "import { HeaderMegaMenu } from '../../components/HeaderMegaMenu';\nimport { MobileAppBanner } from '../../components/MobileAppBanner';\nimport { Footer } from '../../components/Footer';");
  }

  // Find the start of the footer
  const footerStartIndex = content.indexOf('<footer');
  if (footerStartIndex === -1) {
    console.log('Footer not found in', filePath);
    return;
  }
  
  // Find the end of the main tag if it exists, or just before the footer
  const mainEndIndex = content.lastIndexOf('</main>', footerStartIndex);
  if (mainEndIndex === -1) {
    console.log('Main tag not found before footer in', filePath);
    return;
  }

  const newComponentPart = `
        <MobileAppBanner />
        <Footer onSelectService={onSelectService} />
      </main>
    </div>
  );
};`;
  
  // Replace everything from mainEndIndex to the end of the component
  // The component ends at '};'
  const componentEndIndex = content.lastIndexOf('};');
  if (componentEndIndex === -1) {
      console.log('Component end not found');
      return;
  }
  
  content = content.substring(0, mainEndIndex) + newComponentPart;
  
  fs.writeFileSync(filePath, content);
  console.log('Updated', filePath);
});
