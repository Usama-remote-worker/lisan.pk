const fs = require('fs');
const path = require('path');

const WORKSPACE_ROOT = path.resolve(__dirname, '../../');
const BUILD_APP_DIR = path.join(WORKSPACE_ROOT, '.next/server/app');

function resolvePath(...parts) {
    return path.join(WORKSPACE_ROOT, ...parts);
}

// 1. Recursive finder for emitted HTML files (excluding brackets and _not-found)
function getHtmlFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            getHtmlFiles(filePath, fileList);
        } else if (file.endsWith('.html')) {
            // Ignore templates containing '[' or ']' and the _not-found page
            if (!file.includes('[') && !file.includes(']') && file !== '_not-found.html') {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

// 2. Parse HTML file for SEO parameters
function parseHtmlFile(filePath) {
    const html = fs.readFileSync(filePath, 'utf8');

    // Extract Title
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    let titleText = titleMatch ? titleMatch[1].trim() : '';
    titleText = titleText.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

    // Extract Meta Description
    const descMatch = html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i) || 
                      html.match(/<meta[^>]+content="([^"]*)"[^>]+name="description"/i);
    let descText = descMatch ? descMatch[1].trim() : '';
    descText = descText.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

    // Extract Canonical
    const canonicalMatch = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i) ||
                           html.match(/<link[^>]+href="([^"]*)"[^>]+rel="canonical"/i);
    const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';

    // Extract Robots
    const robotsMatch = html.match(/<meta[^>]+name="robots"[^>]+content="([^"]*)"/i) ||
                         html.match(/<meta[^>]+content="([^"]*)"[^>]+name="robots"/i);
    const robots = robotsMatch ? robotsMatch[1].trim() : 'index, follow';

    // Extract H1 and H1 count
    const h1Matches = [];
    const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
    let h1Match;
    while ((h1Match = h1Regex.exec(html)) !== null) {
        let content = h1Match[1].replace(/<\/?[^>]+(>|$)/g, "").trim().replace(/\s+/g, ' ');
        content = content.replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ');
        h1Matches.push(content);
    }
    const h1Text = h1Matches.join('; ');
    const h1Count = h1Matches.length;

    // Full text word count (strip script, style, svg, and tags)
    let bodyText = '';
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
        bodyText = bodyMatch[1]
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
            .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
            .replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, ' ')
            .replace(/<\/?[a-zA-Z0-9]+[^>]*>/g, ' ')
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/\s+/g, ' ')
            .trim();
    } else {
        bodyText = html
            .replace(/<head[^>]*>[\s\S]*?<\/head>/gi, ' ')
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
            .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
            .replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, ' ')
            .replace(/<\/?[a-zA-Z0-9]+[^>]*>/g, ' ')
            .replace(/&nbsp;/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }
    const fullWordCount = bodyText.split(/\s+/).filter(w => w.length > 0).length;

    // Unique main content word count (inside <main>)
    let mainText = '';
    const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    if (mainMatch) {
        mainText = mainMatch[1]
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
            .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
            .replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, ' ')
            .replace(/<\/?[a-zA-Z0-9]+[^>]*>/g, ' ')
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/\s+/g, ' ')
            .trim();
    }
    const mainWordCount = mainText.split(/\s+/).filter(w => w.length > 0).length;

    // Extract all outbound internal links
    const internalLinks = new Set();
    const aRegex = /<a[^>]+href="([^"]*)"/gi;
    let aMatch;
    while ((aMatch = aRegex.exec(html)) !== null) {
        let href = aMatch[1].trim();
        if (href.startsWith('/') || href.startsWith('https://www.lisan.pk')) {
            href = href.replace('https://www.lisan.pk', '');
            href = href.split('#')[0].split('?')[0]; // strip hash and queries
            if (href === '') href = '/';
            if (href.length > 1 && href.endsWith('/')) href = href.slice(0, -1);
            internalLinks.add(href);
        }
    }

    return {
        title: titleText,
        description: descText,
        canonical,
        robots,
        h1: h1Text,
        h1Count,
        fullWords: fullWordCount,
        mainWords: mainWordCount,
        linksOut: internalLinks
    };
}

// Map file path to public URL
function getPublicUrl(relativeFilePath) {
    let url = '/' + relativeFilePath.replace(/\\/g, '/').replace(/\.html$/, '');
    if (url === '/index') return '/';
    if (url.endsWith('/index')) url = url.slice(0, -6);
    return url;
}

console.log('Scanning build HTML files...');
const files = getHtmlFiles(BUILD_APP_DIR);
console.log(`Found ${files.length} active pre-rendered HTML files.`);

const inventory = [];
const urlToPageMap = {};

files.forEach(f => {
    const relPath = path.relative(BUILD_APP_DIR, f);
    const url = getPublicUrl(relPath);
    const parsed = parseHtmlFile(f);
    
    const page = {
        url,
        template: 'emitted:' + relPath,
        title: parsed.title,
        desc: parsed.description,
        h1: parsed.h1,
        h1Count: parsed.h1Count,
        words: parsed.fullWords,
        mainWords: parsed.mainWords,
        canonical: parsed.canonical,
        robots: parsed.robots,
        indexable: parsed.robots.includes('noindex') ? 'no' : 'yes',
        linksOut: parsed.linksOut,
        linksIn: new Set()
    };
    
    inventory.push(page);
    urlToPageMap[url] = page;
});

// Calculate Links IN
inventory.forEach(page => {
    page.linksOut.forEach(dest => {
        if (urlToPageMap[dest]) {
            urlToPageMap[dest].linksIn.add(page.url);
        }
    });
});

// Build CSV output
const csvRows = [
    'URL,template/file path,title tag + char count,meta description + char count,H1 (and count of H1s),word count,canonical tag value,robots directive,indexable yes/no,number of internal links IN,number of internal links OUT,primary topic'
];

inventory.forEach(p => {
    const escapeCsv = (str) => {
        if (!str) return '""';
        return `"${String(str).replace(/"/g, '""').replace(/\r?\n|\r/g, ' ')}"`;
    };

    const titleField = `${p.title} (${p.title.length})`;
    const descField = `${p.desc} (${p.desc.length})`;
    const h1Field = `${p.h1} (${p.h1Count})`;
    
    // Estimate topic based on URL path structure
    let topic = 'Static page';
    if (p.url === '/') topic = 'Homepage';
    else if (p.url.startsWith('/blog/')) topic = 'Blog Post';
    else if (p.url.startsWith('/locations/')) {
        const parts = p.url.split('/');
        if (parts.length === 3) topic = `City page: ${parts[2]}`;
        else if (parts.length === 4) topic = `Local service page: ${parts[3]} in ${parts[2]}`;
    }
    else if (p.url.startsWith('/services/translation/')) topic = `Service detail page: ${p.url.split('/').pop()}`;
    else if (p.url.startsWith('/scholarships/')) topic = `Scholarship guide: ${p.url.split('/').pop()}`;
    else if (p.url.startsWith('/study-in-turkey/')) topic = `Turkish university page: ${p.url.split('/').pop()}`;
    else if (p.url.startsWith('/embassies/')) topic = `Embassy page: ${p.url.split('/').pop()}`;

    const row = [
        p.url,
        p.template,
        titleField,
        descField,
        h1Field,
        p.words,
        p.canonical,
        p.robots,
        p.indexable,
        p.linksIn.size,
        p.linksOut.size,
        topic
    ].map(escapeCsv).join(',');

    csvRows.push(row);
});

const seoDir = resolvePath('seo');
if (!fs.existsSync(seoDir)) {
    fs.mkdirSync(seoDir);
}

fs.writeFileSync(path.join(seoDir, 'page-inventory.csv'), csvRows.join('\n'), 'utf8');
console.log('Successfully wrote rebuilt page-inventory.csv.');
