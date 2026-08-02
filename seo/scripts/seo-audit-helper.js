const fs = require('fs');
const path = require('path');

const WORKSPACE_ROOT = path.resolve(__dirname, '../../');

function workspacePath(...parts) {
    return path.join(WORKSPACE_ROOT, ...parts);
}

// 1. Parse Location & Services Data
function parseLocationServices() {
    const filePath = workspacePath('src/data/location-services.ts');
    const content = fs.readFileSync(filePath, 'utf8');

    // Extract cities keys
    const citiesMatch = content.match(/export const cities: Record<string, CityData> = ({[\s\S]+?});\n\nexport const services/);
    let citiesKeys = [];
    if (citiesMatch) {
        const citiesText = citiesMatch[1];
        const keyRegex = /"([^"]+)"\s*:\s*{/g;
        let match;
        while ((match = keyRegex.exec(citiesText)) !== null) {
            citiesKeys.push(match[1]);
        }
    } else {
        // Fallback fallback if regex fails
        citiesKeys = ['karachi', 'lahore', 'islamabad', 'rawalpindi', 'multan', 'sialkot', 'sargodha', 'faisalabad', 'peshawar', 'gujranwala', 'hyderabad', 'bahawalpur', 'quetta', 'abbottabad', 'mardan', 'swat', 'sukkur', 'larkana', 'sahiwal', 'gujrat', 'jhelum', 'mirpur', 'muzaffarabad', 'rahim-yar-khan', 'dera-ghazi-khan', 'kohat', 'nawabshah', 'mirpur-khas', 'bannu'];
    }

    // Extract services keys
    const servicesMatch = content.match(/export const services: Record<string, ServiceData> = ({[\s\S]+?});\n\nexport const packages/);
    let servicesKeys = [];
    if (servicesMatch) {
        const servicesText = servicesMatch[1];
        const keyRegex = /"([^"]+)"\s*:\s*{/g;
        let match;
        while ((match = keyRegex.exec(servicesText)) !== null) {
            servicesKeys.push(match[1]);
        }
    } else {
        servicesKeys = ["saudi-scholarship-translation", "degree-transcript-translation", "matric-certificate-translation", "intermediate-certificate-translation", "diploma-certificate-translation", "nikah-nama-translation", "birth-certificate-translation", "domicile-certificate-translation", "police-character-certificate-translation", "moe-equivalency-pack", "madinah-university-bundle", "ksu-admission-set", "iata-dts-umrah-travel-agency", "urdu-to-english-translation"];
    }

    // Extract allowlisted subpages
    const allowlistedMatch = content.match(/export const ALLOWLISTED_LOCATION_SUBPAGES = new Set<string>\(\[([\s\S]+?)\]\);/);
    let allowlisted = new Set();
    if (allowlistedMatch) {
        const text = allowlistedMatch[1];
        const items = text.split(',').map(s => s.trim().replace(/"/g, '').replace(/'/g, ''));
        items.forEach(i => {
            if (i) allowlisted.add(i.toLowerCase());
        });
    }

    return { cities: citiesKeys, services: servicesKeys, allowlisted };
}

// 2. Parse Documents Data
function parseDocuments() {
    const filePath = workspacePath('src/data/documents.ts');
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf8');
    const slugRegex = /slug\s*:\s*"([^"]+)"/g;
    let slugs = [];
    let match;
    while ((match = slugRegex.exec(content)) !== null) {
        slugs.push(match[1]);
    }
    return slugs;
}

// 3. Parse Languages Data
function parseLanguages() {
    const filePath = workspacePath('src/data/languages.ts');
    if (!fs.existsSync(filePath)) return { list: [], pairs: [] };
    const content = fs.readFileSync(filePath, 'utf8');
    
    const idRegex = /id\s*:\s*"([^"]+)"/g;
    let ids = [];
    let match;
    while ((match = idRegex.exec(content)) !== null) {
        ids.push(match[1]);
    }

    // Replicate generateLanguagePairs logic
    const pairs = [];
    for (const id of ids) {
        if (id !== "english") {
            pairs.push({ source: id, target: "english" });
            pairs.push({ source: "english", target: id });
        }
        if (id !== "urdu") {
            pairs.push({ source: id, target: "urdu" });
            pairs.push({ source: "urdu", target: id });
        }
        if (id !== "arabic" && id !== "english" && id !== "urdu") {
            pairs.push({ source: id, target: "arabic" });
            pairs.push({ source: "arabic", target: id });
        }
    }
    
    // Deduplicate
    const uniqueMap = {};
    pairs.forEach(p => {
        uniqueMap[`${p.source}-${p.target}`] = p;
    });
    return { list: ids, pairs: Object.values(uniqueMap) };
}

// 4. Parse Universities Data
function parseUniversities() {
    const filePath = workspacePath('src/data/scholarship-universities.ts');
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf8');
    const keyRegex = /"([^"]+)"\s*:\s*{/g;
    let slugs = [];
    let match;
    while ((match = keyRegex.exec(content)) !== null) {
        if (match[1] !== "itemListElement" && match[1] !== "founder" && match[1] !== "@type") {
            slugs.push(match[1]);
        }
    }
    return slugs.filter(s => ['king-saud-university', 'king-abdulaziz-university', 'islamic-university-of-madinah'].includes(s));
}

// 5. Parse Turkey Universities Data
function parseTurkeyUniversities() {
    const filePath = workspacePath('src/data/turkey-universities.ts');
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf8');
    const keyRegex = /"([^"]+)"\s*:\s*{/g;
    let slugs = [];
    let match;
    while ((match = keyRegex.exec(content)) !== null) {
        slugs.push(match[1]);
    }
    return slugs.filter(s => ['beykoz-university', 'kent-university', 'topkapi-university'].includes(s));
}

// 6. Parse Embassies Data
function parseEmbassies() {
    const filePath = workspacePath('src/data/embassies.ts');
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf8');
    const slugRegex = /slug\s*:\s*"([^"]+)"/g;
    let slugs = [];
    let match;
    while ((match = slugRegex.exec(content)) !== null) {
        slugs.push(match[1]);
    }
    return slugs;
}

// 7. Read Blog Posts
function getBlogPosts() {
    const dirPath = workspacePath('src/content/blog');
    if (!fs.existsSync(dirPath)) return [];
    const files = fs.readdirSync(dirPath);
    return files
        .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
        .map(f => f.replace(/\.md$/, '').replace(/\.mdx$/, ''))
        .filter(slug => slug !== 'template-post');
}

// 8. Parse service detail pages
function getServiceDetailSlugs() {
    const filePath = workspacePath('src/app/services/translation/[slug]/page.tsx');
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf8');
    const keyRegex = /"([^"]+)"\s*:\s*{\s*title\s*:/g;
    let slugs = [];
    let match;
    while ((match = keyRegex.exec(content)) !== null) {
        slugs.push(match[1]);
    }
    if (slugs.length === 0) {
        slugs = [
            "arabic-translation", "english-translation", "turkish-translation",
            "degree-translation", "legal-translation", "certified-translation",
            "nikah-nama-marriage-certificate", "birth-certificate-translation",
            "academic-degree-transcript", "police-character-certificate",
            "divorce-certificate-translation", "medical-report-translation",
            "property-document-translation", "legal-document-translation",
            "bank-statement-translation", "cnic-id-card-translation",
            "business-document-translation", "experience-certificate-translation",
            "saudi-scholarship-translation", "iata-dts-umrah-travel-agency",
            "urdu-to-english-translation"
        ];
    }
    return slugs;
}

console.log('Detecting data segments...');
const locData = parseLocationServices();
const docs = parseDocuments();
const langs = parseLanguages();
const unis = parseUniversities();
const turkeyUnis = parseTurkeyUniversities();
const embassies = parseEmbassies();
const blogs = getBlogPosts();
const serviceDetails = getServiceDetailSlugs();

console.log(`Found:
- ${locData.cities.length} Cities
- ${locData.services.length} Services
- ${locData.allowlisted.size} Allowlisted City-Service Pages
- ${docs.length} Documents (/document-translation-services)
- ${langs.list.length} Languages yielding ${langs.pairs.length} Translation Pairs
- ${unis.length} Saudi Scholarships
- ${turkeyUnis.length} Turkish Universities
- ${embassies.length} Embassies
- ${blogs.length} Blog Posts
- ${serviceDetails.length} Translation Services Detail Pages
`);
