const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/components/MobileAppBanner.tsx',
  ...fs.readdirSync('src/pages').map(file => 'src/pages/' + file).filter(file => file.endsWith('Landing.tsx')),
  ...fs.readdirSync('src/pages/services').map(file => 'src/pages/services/' + file).filter(file => file.endsWith('Page.tsx')),
  ...fs.readdirSync('src/pages/rcmc').map(file => 'src/pages/rcmc/' + file).filter(file => file.endsWith('Page.tsx')),
];

targetFiles.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace /Applogo.png with Applogo.png
  if (content.includes('src="/Applogo.png"')) {
    content = content.split('src="/Applogo.png"').join('src="Applogo.png"');
    fs.writeFileSync(filePath, content);
    console.log('Updated', filePath);
  }
});
