const fs = require('fs');
const path = require('path');

const CSV_PATH = path.resolve(__dirname, '../page-inventory.csv');

if (!fs.existsSync(CSV_PATH)) {
    console.error('CSV inventory not found. Run builder first.');
    process.exit(1);
}

const content = fs.readFileSync(CSV_PATH, 'utf8');
const lines = content.split('\n').filter(Boolean);
const headers = lines[0].split(',');

// Helper to parse CSV row (accounting for quotes and commas)
function parseRow(rowText) {
    const result = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < rowText.length; i++) {
        const char = rowText[i];
        if (char === '"') {
            if (inQuotes && rowText[i + 1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current);
    return result;
}

const pages = lines.slice(1).map(l => {
    const parts = parseRow(l);
    return {
        url: parts[0],
        template: parts[1],
        title: parts[2],
        desc: parts[3],
        h1: parts[4],
        words: parseInt(parts[5], 10),
        canonical: parts[6],
        robots: parts[7],
        indexable: parts[8],
        inLinks: parseInt(parts[9], 10) || 0,
        outLinks: parseInt(parts[10], 10) || 0,
        topic: parts[11]
    };
});

console.log(`Loaded ${pages.length} pages for diagnostics.\n`);

// 1. Thin Content (< 300 words)
console.log('--- 1. Thin Content (< 300 words) ---');
const thin = pages.filter(p => p.words < 300);
console.log(`Total thin pages: ${thin.length}`);
thin.forEach(p => {
    console.log(`- ${p.url} (${p.words} words)`);
});
console.log();

// 2. Titles outside 50-60 chars
console.log('--- 2. Title length outside 50-60 chars ---');
const titleIssues = pages.map(p => {
    const match = p.title.match(/\((\d+)\)$/);
    const len = match ? parseInt(match[1], 10) : 0;
    const titleText = p.title.replace(/\s*\(\d+\)$/, '');
    return { url: p.url, title: titleText, len, indexable: p.indexable };
}).filter(t => t.indexable === 'yes' && (t.len < 50 || t.len > 60));

console.log(`Total indexable pages with title issues: ${titleIssues.length}`);
console.log('Sample (first 10):');
titleIssues.slice(0, 10).forEach(t => {
    console.log(`- ${t.url}: "${t.title}" (${t.len} chars)`);
});
console.log();

// 3. Descriptions outside 140-160 chars
console.log('--- 3. Description length outside 140-160 chars ---');
const descIssues = pages.map(p => {
    const match = p.desc.match(/\((\d+)\)$/);
    const len = match ? parseInt(match[1], 10) : 0;
    const descText = p.desc.replace(/\s*\(\d+\)$/, '');
    return { url: p.url, desc: descText, len, indexable: p.indexable };
}).filter(d => d.indexable === 'yes' && (d.len < 140 || d.len > 160));

console.log(`Total indexable pages with description issues: ${descIssues.length}`);
console.log('Sample (first 10):');
descIssues.slice(0, 10).forEach(d => {
    console.log(`- ${d.url}: "${d.desc}" (${d.len} chars)`);
});
console.log();

// 4. Duplicate Titles / Descriptions across indexable pages
console.log('--- 4. Duplicate Titles or Descriptions across indexable pages ---');
const indexablePages = pages.filter(p => p.indexable === 'yes');
const titleMap = {};
const descMap = {};

indexablePages.forEach(p => {
    const titleClean = p.title.replace(/\s*\(\d+\)$/, '');
    const descClean = p.desc.replace(/\s*\(\d+\)$/, '');

    if (!titleMap[titleClean]) titleMap[titleClean] = [];
    titleMap[titleClean].push(p.url);

    if (!descClean[descClean]) descMap[descClean] = [];
    descMap[descClean].push(p.url);
});

console.log('Duplicate titles:');
let dupTitlesCount = 0;
Object.entries(titleMap).forEach(([title, urls]) => {
    if (urls.length > 1) {
        dupTitlesCount++;
        console.log(`- Title: "${title}"`);
        urls.forEach(u => console.log(`  ↳ ${u}`));
    }
});
if (dupTitlesCount === 0) console.log('None.');
console.log();

// 5. Heading counts check
console.log('--- 5. Heading Counts (H1s) ---');
const multiH1 = pages.filter(p => {
    const match = p.h1.match(/\((\d+)\)$/);
    const count = match ? parseInt(match[1], 10) : 0;
    return count > 1;
});
console.log(`Pages with multiple H1s: ${multiH1.length}`);
const missingH1 = pages.filter(p => {
    const match = p.h1.match(/\((\d+)\)$/);
    const count = match ? parseInt(match[1], 10) : 0;
    return count === 0;
});
console.log(`Pages with missing H1s: ${missingH1.length}`);
console.log();

// 6. Indexing & Canonical issues
console.log('--- 6. Orphan Pages (Indexable with 0 internal links IN) ---');
const orphans = pages.filter(p => p.indexable === 'yes' && p.inLinks === 0);
console.log(`Orphan pages count: ${orphans.length}`);
orphans.forEach(o => {
    console.log(`- ${o.url} (${o.template})`);
});
console.log();

// 7. Noindexed counts summary
console.log('--- 7. Noindexed Pages Summary ---');
const noindexPages = pages.filter(p => p.indexable === 'no');
console.log(`Total noindex pages: ${noindexPages.length}`);
const noindexByTpl = {};
noindexPages.forEach(p => {
    noindexByTpl[p.template] = (noindexByTpl[p.template] ?? 0) + 1;
});
Object.entries(noindexByTpl).forEach(([tpl, count]) => {
    console.log(`- ${tpl}: ${count} pages`);
});
console.log();
