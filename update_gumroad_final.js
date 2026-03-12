const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'data', 'templates.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The file structure is an array of objects. 
// Let's use a simpler regex that matches title followed by gumroadUrl
// We'll use a positive lookahead or just match enough context.
// Actually, let's just use the title to find the block.

// We'll use a regex that captures the whole template block cautiously.
content = content.replace(/{\s*id:\s*'([^']*)'([\s\S]*?)title:\s*'([^']*)'([\s\S]*?)gumroadUrl:\s*('[^']*'|null)([\s\S]*?)}/g, (match, id, middle1, title, middle2, oldUrl, middle3) => {
    if (id === '1') return match;

    const slug = title.toLowerCase()
        .replace(/\s+/g, '')
        .replace(/'/g, '');

    const newUrl = `https://craftedwebstudio.gumroad.com/l/${slug}`;
    console.log(`Updating ID ${id} (${title}) -> ${slug}`);

    return `{ id: '${id}'${middle1}title: '${title}'${middle2}gumroadUrl: '${newUrl}'${middle3}}`;
});

fs.writeFileSync(filePath, content);
console.log('Final regex update complete');
