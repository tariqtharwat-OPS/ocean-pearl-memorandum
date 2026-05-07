const fs = require('fs');
const filePath = 'd:/Platform/MASTER_HTML.html';
let content = fs.readFileSync(filePath, 'utf8');

// Normalize page markers to ensure they don't interfere with splitting
content = content.replace(/<\/div>\s*<\/div>\s*<\/div><!-- PAGE/g, '</div></div></div>\n<!-- PAGE');

const pageMarker = '<div class="doc-page';
let parts = content.split(pageMarker);

// parts[0] is header/css
let newContent = parts[0];

for (let i = 1; i < parts.length; i++) {
    let pageContent = parts[i];
    
    // We want to find where the page actually ends.
    // It should end before the next <div class="doc-page" or at the end of body.
    // But since we split, it's the end of the string.
    
    // Count internal divs
    let openCount = (pageContent.match(/<div/g) || []).length;
    let closeCount = (pageContent.match(/<\/div>/g) || []).length;
    
    // We expect closeCount = openCount + 1 (the one that closes doc-page)
    if (closeCount < openCount + 1) {
        let missing = (openCount + 1) - closeCount;
        console.log(`Page ${i}: Adding ${missing} missing </div>`);
        pageContent = pageContent.trimEnd() + '\n' + '    </div>'.repeat(missing);
    } else if (closeCount > openCount + 1) {
        let extra = closeCount - (openCount + 1);
        console.log(`Page ${i}: Removing ${extra} extra </div>`);
        for (let j = 0; j < extra; j++) {
            // Remove last </div>
            pageContent = pageContent.replace(/<\/div>\s*$/, '');
            // Wait, if there's a comment after it, we need to be careful.
            // But usually the extra ones are at the very end.
        }
    }
    
    newContent += pageMarker + pageContent;
}

fs.writeFileSync(filePath, newContent);
console.log('Final Structural Normalization Complete.');
