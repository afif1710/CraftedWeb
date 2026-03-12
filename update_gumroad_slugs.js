const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'data', 'templates.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Match each template block and update gumroadUrl inside it
// Format: { id: '...', title: '...', ..., gumroadUrl: '...', ... }
content = content.replace(/{[\s\S]*?id:\s*'([^']*)'[\s\S]*?title:\s*'([^']*)'[\s\S]*?gumroadUrl:\s*('[^']*'|null),?[\s\S]*?}/g, (match, id, title) => {
    // Skip ID 1 (TypoFlux) as per user request (it's already correct)
    if (id === '1') return match;

    // Generate slug from title: lowercase, remove spaces, remove apostrophes
    const slug = title.toLowerCase()
        .replace(/\s+/g, '')
        .replace(/'/g, '');

    const gumroadUrl = `https://craftedwebstudio.gumroad.com/l/${slug}`;

    // Replace the gumroadUrl line within the match
    return match.replace(/gumroadUrl:\s*('[^']*'|null),?/, `gumroadUrl: '${gumroadUrl}',`);
});

fs.writeFileSync(filePath, content);
console.log('Successfully updated template Gumroad URLs with title-based slugs (no spaces)');
