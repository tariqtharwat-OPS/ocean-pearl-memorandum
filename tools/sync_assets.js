const fs = require('fs');
const path = require('path');

const platformDir = 'D:/Platform';
const filePath = path.join(platformDir, 'MASTER_HTML.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Move loose images to appropriate folders
function moveFile(src, dest) {
    if (fs.existsSync(src)) {
        fs.renameSync(src, dest);
        console.log(`Moved ${src} to ${dest}`);
    }
}

moveFile(path.join(platformDir, 'New-Logo.png'), path.join(platformDir, 'assets/logos/logo.png'));
moveFile(path.join(platformDir, 'assets/op_command_center.png'), path.join(platformDir, 'assets/screenshots/command_center.png'));
moveFile(path.join(platformDir, 'assets/retail_app_mockup.png'), path.join(platformDir, 'assets/screenshots/retail_app.png'));

// 2. Standardize paths in HTML (remove ./ prefix, ensure correct subfolder)
content = content.replace(/src="\.\/assets\/op_command_center\.png"/g, 'src="assets/screenshots/command_center.png"');
content = content.replace(/src="\.\/assets\/retail_app_mockup\.png"/g, 'src="assets/screenshots/retail_app.png"');
content = content.replace(/src="assets\/renders\/fixed_ice_factory\.png"/g, 'src="assets/renders/fixed_ice_factory.png"'); // Ensure no duplicates

fs.writeFileSync(filePath, content);
console.log('Asset folder and HTML paths synchronized.');
