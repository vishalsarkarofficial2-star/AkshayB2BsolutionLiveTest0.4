const fs = require('fs');

const targetFiles = [
  'src/pages/services/IsbnRegistrationPage.tsx',
  'src/pages/services/MakeInIndiaRegistrationPage.tsx',
  'src/pages/services/NsicRegistrationPage.tsx',
  'src/pages/services/PoshCompliancePage.tsx',
  'src/pages/services/ReraRegistrationPage.tsx',
  'src/pages/services/ShopAndEstablishmentCertificatePage.tsx',
  'src/pages/services/TradeLicensePage.tsx',
];

targetFiles.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove <MobileAppBanner />
  if (content.includes('<MobileAppBanner />')) {
    content = content.replace('<MobileAppBanner />', '');
    fs.writeFileSync(filePath, content);
    console.log('Removed MobileAppBanner from', filePath);
  }
  
  // Also remove import if not used? 
  // (Optional, but clean. I'll skip for now to avoid regex complexity and focus on the removal requested)
});
