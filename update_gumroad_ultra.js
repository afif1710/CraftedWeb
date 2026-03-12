const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'data', 'templates.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The file has blocks like:
/*
  {
    id: '2',
    title: 'Ocean Themed Portfolio',
    ...
    gumroadUrl: '...',
    ...
  },
*/

// Let's use a very reliable index-based approach
let searchIndex = 0;
while (true) {
    const idIndex = content.indexOf("id: '", searchIndex);
    if (idIndex === -1) break;

    const idEndIndex = content.indexOf("'", idIndex + 5);
    const id = content.substring(idIndex + 5, idEndIndex);

    const titleIndex = content.indexOf("title: '", idEndIndex);
    const titleEndIndex = content.indexOf("'", titleIndex + 8);
    const title = content.substring(titleIndex + 8, titleEndIndex);

    // Find the NEXT id to bound the search for gumroadUrl
    const nextIdIndex = content.indexOf("id: '", titleEndIndex);

    const gumroadUrlIndex = content.indexOf("gumroadUrl:", titleEndIndex);

    if (gumroadUrlIndex !== -1 && (nextIdIndex === -1 || gumroadUrlIndex < nextIdIndex)) {
        if (id !== '1') {
            const slug = title.toLowerCase().replace(/\s+/g, '').replace(/'/g, '');
            const newUrl = `https://craftedwebstudio.gumroad.com/l/${slug}`;

            // Find the end of the current gumroadUrl value (it ends at ' or null)
            const valueStartIndex = content.indexOf(":", gumroadUrlIndex) + 1;
            const valueEndIndex = content.indexOf(",", valueStartIndex); // assuming it ends with a comma

            const leadingSpaces = content.substring(gumroadUrlIndex, valueStartIndex).match(/\s*/)[0];

            content = content.substring(0, gumroadUrlIndex) +
                `gumroadUrl: '${newUrl}'` +
                content.substring(valueEndIndex);

            searchIndex = gumroadUrlIndex + newUrl.length + 20;
        } else {
            searchIndex = titleEndIndex;
        }
    } else {
        searchIndex = titleEndIndex;
    }
}

fs.writeFileSync(filePath, content);
console.log('Final iterative string replacement complete');
