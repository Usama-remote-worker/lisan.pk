const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// Path to the service account key
const KEY_FILE_PATH = path.join(__dirname, '../service-account.json');
const SITEMAP_URL = 'https://www.lisan.pk/sitemap.xml';
const QUOTA_LIMIT = 200; // Google Indexing API default daily limit

async function main() {
  console.log('🚀 Starting Bulk Indexing for Lisan.pk...\n');

  // 1. Check if the service account key exists
  if (!fs.existsSync(KEY_FILE_PATH)) {
    console.error('❌ ERROR: service-account.json not found in the root directory.');
    console.error('Please follow the "Google Cloud Bulk Indexing Setup" guide (google_indexing_setup.md artifact) to create and download your Service Account JSON key.');
    process.exit(1);
  }

  console.log('✅ Service account key found.');

  // 2. Setup Google Auth
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });
  
  const indexing = google.indexing('v3');

  // 3. Fetch the sitemap
  console.log(`\n📡 Fetching sitemap from: ${SITEMAP_URL}`);
  let sitemapXml;
  try {
    const response = await fetch(SITEMAP_URL);
    if (!response.ok) {
        throw new Error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
    }
    sitemapXml = await response.text();
  } catch (error) {
    console.error('❌ ERROR fetching sitemap:', error.message);
    process.exit(1);
  }

  // 4. Extract URLs from the sitemap
  const urlRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  const urls = [];
  while ((match = urlRegex.exec(sitemapXml)) !== null) {
    urls.push(match[1]);
  }

  console.log(`✅ Found ${urls.length} URLs in the sitemap.`);

  if (urls.length === 0) {
    console.log('No URLs found to index. Exiting.');
    return;
  }

  // 5. Select the URLs to index (up to the daily quota limit)
  // For standard usage, you might want to reverse this if the newest pages are at the bottom of the sitemap
  // Next.js sitemaps usually don't have a strict order unless defined, but let's take the first 200, 
  // or you could randomize or sort. We'll just take the first 200 for now.
  const urlsToIndex = urls.slice(0, QUOTA_LIMIT);
  
  console.log(`\n⏳ Submitting ${urlsToIndex.length} URLs to Google Indexing API...`);
  console.log(`(Google allows 200 requests per day per project)\n`);

  let successCount = 0;
  let errorCount = 0;

  // 6. Submit URLs to Google Indexing API
  for (let i = 0; i < urlsToIndex.length; i++) {
    const url = urlsToIndex[i];
    try {
      await indexing.urlNotifications.publish({
        auth: auth,
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`[${i + 1}/${urlsToIndex.length}] ✅ Submitted: ${url}`);
      successCount++;
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`[${i + 1}/${urlsToIndex.length}] ❌ Failed to submit: ${url}`);
      console.error(`   Reason: ${error.message}`);
      if (error.response && error.response.data && error.response.data.error) {
          console.error(`   Details: ${error.response.data.error.message}`);
      }
      errorCount++;
    }
  }

  console.log('\n🎉 Bulk Indexing Complete!');
  console.log(`✅ Successfully submitted: ${successCount}`);
  if (errorCount > 0) {
    console.log(`❌ Failed submissions: ${errorCount}`);
    console.log('\nNote: If you are seeing quota errors, you have reached your 200 URLs/day limit.');
  }
}

main().catch(console.error);
