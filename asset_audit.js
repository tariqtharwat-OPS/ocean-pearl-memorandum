const fs = require('fs');
const path = require('path');

const platformDir = 'D:/Platform';
const filePath = path.join(platformDir, 'MASTER_HTML.html');
const content = fs.readFileSync(filePath, 'utf8');

console.log('--- ASSET FOLDER STRUCTURE ---');
function listDir(dir, indent = '') {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
            console.log(`${indent}[DIR] ${file}`);
            if (file !== '.git' && file !== 'node_modules') {
                listDir(fullPath, indent + '  ');
            }
        } else {
            console.log(`${indent}${file}`);
        }
    });
}
listDir(path.join(platformDir, 'assets'));

console.log('\n--- IMAGE PATHS IN HTML ---');
const imgRegex = /src="([^"]+)"/g;
let match;
const paths = new Set();
while ((match = imgRegex.exec(content)) !== null) {
    paths.add(match[1]);
}
paths.forEach(p => {
    const exists = fs.existsSync(path.join(platformDir, p));
    console.log(`${p} - ${exists ? 'EXISTS' : 'MISSING'}`);
});

console.log('\n--- LOOSE IMAGES IN ROOT ---');
const rootFiles = fs.readdirSync(platformDir);
rootFiles.forEach(file => {
    if (file.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i)) {
        console.log(file);
    }
});

console.log('\n--- ABSOLUTE PATH CHECK ---');
if (content.match(/src="[A-Z]:/i) || content.match(/src="file:\/\/\//i)) {
    console.log('Found absolute paths!');
} else {
    console.log('No absolute paths found.');
}

console.log('\n--- EXTERNAL DEPENDENCIES ---');
if (content.match(/<link[^>]+href="http/i) || content.match(/<script[^>]+src="http/i)) {
    console.log('Found external dependencies (Fonts/Tailwind CDN).');
}
