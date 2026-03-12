const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'data', 'templates.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Use a regex to find all title/gumroadUrl pairs
// This handles any IDs or other fields in between
content = content.replace(/(title:\s*'([^']*)'[\s\S]*?gumroadUrl:\s*)('[^']*'|null)/g, (match, prefix, title, oldUrlValue) => {
    // We need to check the ID too if we want to skip ID 1, 
    // but the user said "from id #2", and TypoFlux (ID 1) title is "TypoFlux" 
    // which would result in "typoflux" anyway, matching what it is currently.
    // So let's just apply it to everything for consistency.

    // Custom slug rule: lowercase, remove spaces, remove apostrophes
    const slug = title.toLowerCase()
        .replace(/\s+/g, '')
        .replace(/'/g, '');

    const newUrl = `https://craftedwebstudio.gumroad.com/l/${slug}`;
    console.log(`Title: "${title}" -> Slug: "${slug}"`);

    return `${prefix}'${newUrl}'`;
});

fs.writeFileSync(filePath, content);
console.log('Regex-based total update complete');
