const fs = require('fs');

const targetFiles = [
  'src/pages/services/Iso14001Page.tsx',
  'src/pages/services/Iso22000Page.tsx',
  'src/pages/services/Iso27001Page.tsx',
  'src/pages/services/Iso45001Page.tsx',
  'src/pages/services/Iso9001Page.tsx',
  'src/pages/services/IsoCertificatePage.tsx',
];

targetFiles.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes("from '../../components/Footer'")) {
    // Add import
    const newContent = content.replace("import { HeaderMegaMenu } from '../../components/HeaderMegaMenu';", "import { HeaderMegaMenu } from '../../components/HeaderMegaMenu';\nimport { Footer } from '../../components/Footer';");
    fs.writeFileSync(filePath, newContent);
    console.log('Updated imports in', filePath);
  }
});
