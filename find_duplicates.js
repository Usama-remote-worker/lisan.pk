const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const titles = {};

walkDir('src/app', function(filePath) {
    if (filePath.endsWith('page.tsx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const match = content.match(/title:\s*"([^"]+)"/);
        if (match) {
            const title = match[1];
            if (!titles[title]) titles[title] = [];
            titles[title].push(filePath);
        }
    }
});

for (const [title, files] of Object.entries(titles)) {
    if (files.length > 1) {
        console.log(`Duplicate Title: "${title}"`);
        files.forEach(f => console.log(`  - ${f}`));
    }
}
