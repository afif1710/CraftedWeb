const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'data', 'templates.ts');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

let currentId = '';
let currentTitle = '';

for (let i = 0; i < lines.length; i++) {
    const idMatch = lines[i].match(/id:\s*'([^']*)'/);
    if (idMatch) currentId = idMatch[1];

    const titleMatch = lines[i].match(/title:\s*'([^']*)'/);
    if (titleMatch) currentTitle = titleMatch[1];

    if (lines[i].includes('gumroadUrl:')) {
        if (currentId && currentId !== '1' && currentTitle) {
            const slug = currentTitle.toLowerCase()
                .replace(/\s+/g, '')
                .replace(/'/g, '');

            const newLine = lines[i].replace(/gumroadUrl:\s*('[^']*'|null)/, `gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/${slug}'`);
            console.log(`Updated line ${i + 1} for ${currentTitle} (ID ${currentId})`);
            lines[i] = newLine;
        }
    }
}

fs.writeFileSync(filePath, lines.join('\n'));
console.log('Line-by-line update complete');
