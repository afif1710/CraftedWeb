const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'images');
const destDir = path.join(__dirname, 'public', 'images');

console.log(`Move from ${srcDir} to ${destDir}`);

if (!fs.existsSync(destDir)) {
    console.log('Creating dest dir...');
    fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(srcDir)) {
    const files = fs.readdirSync(srcDir);
    console.log(`Found ${files.length} files.`);
    files.forEach(file => {
        const srcPath = path.join(srcDir, file);
        const destPath = path.join(destDir, file);
        try {
            fs.renameSync(srcPath, destPath);
        } catch (err) {
            console.error(`Failed to move ${file}: ${err.message}`);
            // Fallback copy and unlink if rename fails (cross-device)
            fs.copyFileSync(srcPath, destPath);
            fs.unlinkSync(srcPath);
        }
    });
    console.log('All files moved.');
    try {
        fs.rmdirSync(srcDir);
        console.log('Removed src/images');
    } catch (e) {
        console.log('Could not remove src/images directory:', e.message);
    }
} else {
    console.log('src/images not found');
}
