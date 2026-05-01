
async function pingSitemap() {
    const sitemapUrl = 'https://www.lisan.pk/sitemap.xml';
    const googlePing = `https://www.google.com/ping?sitemap=${sitemapUrl}`;
    
    console.log(`Pinging Google with sitemap: ${sitemapUrl}...`);
    
    try {
        const response = await fetch(googlePing);
        if (response.ok) {
            console.log('✅ Google successfully pinged.');
        } else {
            console.log(`❌ Google ping failed with status: ${response.status}`);
        }
    } catch (error) {
        console.error('❌ Error pinging Google:', error.message);
    }
}

pingSitemap();
