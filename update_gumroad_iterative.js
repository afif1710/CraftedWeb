const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'data', 'templates.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Define a block-based replacement
// We split by individual template entries
// Most entries are separated by a comma and a newline
const entries = content.split(/id:\s*'/);
// entries[0] is the part before the first 'id:'
// subsequent entries start with the ID (e.g., "1', title: ...")

const updatedEntries = entries.map((entry, index) => {
    if (index === 0) return entry; // Header part

    // Check for ID 1 (TypoFlux)
    if (entry.startsWith("1'")) return entry;

    // Extract title
    const titleMatch = entry.match(/title:\s*'([^']*)'/);
    if (!titleMatch) return entry;

    const title = titleMatch[1];

    const slug = title.toLowerCase()
        .replace(/\s+/g, '')
        .replace(/'/g, '');

    const gumroadUrl = `https://craftedwebstudio.gumroad.com/l/${slug}`;

    // Replace gumroadUrl
    return entry.replace(/gumroadUrl:\s*('[^']*'|null)/, `gumroadUrl: '${gumroadUrl}'`);
});

const newContent = updatedEntries.join("id: '");
fs.writeFileSync(filePath, newContent);
console.log('Iterative entry update complete');
