
import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://craftedwebstudio.vercel.app';
const PUBLIC_DIR = path.join(process.cwd(), 'public');

function verifyRobots() {
    console.log('--- Verifying robots.txt ---');
    const robotsPath = path.join(PUBLIC_DIR, 'robots.txt');
    if (!fs.existsSync(robotsPath)) {
        console.error('Error: robots.txt not found in public/');
        process.exit(1);
    }

    const content = fs.readFileSync(robotsPath, 'utf8');
    console.log(content);

    if (!content.includes('User-agent: *')) {
        console.error('Error: robots.txt is missing User-agent: *');
        process.exit(1);
    }
    if (!content.includes(`Sitemap: ${DOMAIN}/sitemap.xml`)) {
        console.error(`Error: robots.txt is missing correct Sitemap URL: ${DOMAIN}/sitemap.xml`);
        process.exit(1);
    }
    console.log('✅ robots.txt is valid\n');
}

function verifySitemap() {
    console.log('--- Verifying sitemap.xml ---');
    const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
    if (!fs.existsSync(sitemapPath)) {
        console.error('Error: sitemap.xml not found in public/');
        process.exit(1);
    }

    const content = fs.readFileSync(sitemapPath, 'utf8');
    // console.log(content);

    const locs = content.match(/<loc>(.*?)<\/loc>/g);
    if (!locs) {
        console.error('Error: sitemap.xml contains no <loc> entries');
        process.exit(1);
    }

    console.log(`Found ${locs.length} URLs in sitemap.`);

    let invalidUrls = [];
    locs.forEach(loc => {
        const url = loc.replace('<loc>', '').replace('</loc>', '');
        if (!url.startsWith(DOMAIN)) {
            invalidUrls.push(url);
        }
    });

    if (invalidUrls.length > 0) {
        console.error('Error: The following URLs in sitemap do not use the preferred domain:');
        invalidUrls.forEach(url => console.error(`  - ${url}`));
        process.exit(1);
    }

    console.log('✅ sitemap.xml is valid\n');
}

console.log('🚀 Starting SEO Verification...\n');
verifyRobots();
verifySitemap();
console.log('✨ SEO Verification Passed!');
