const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../src/content/blog');
const files = fs.readdirSync(blogDir);

const blogData = [];

files.forEach(file => {
  if (file === 'template-post.md' || !file.endsWith('.md')) return;

  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Simple frontmatter parser
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  if (!match) return;

  const fmText = match[1];
  const fm = {};
  
  fmText.split('\n').forEach(line => {
    const parts = line.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      let value = parts.slice(1).join(':').trim();
      // Remove surrounding quotes
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.substring(1, value.length - 1);
      }
      if (value.startsWith("'") && value.endsWith("'")) {
        value = value.substring(1, value.length - 1);
      }
      fm[key] = value;
    }
  });

  const slug = file.replace('.md', '');
  
  // Format the primary keyword by converting slug hyphens to spaces and title-casing
  const primaryKeyword = slug
    .split('-')
    .map(word => {
      // Keep certain words lowercase if desired, but general title-casing is perfect for readability
      if (['in', 'for', 'to', 'and', 'the', 'of', 'at', 'from', 'before', 'till', 'by', 'near', 'with'].includes(word.toLowerCase())) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

  // Parse tags if present
  let tags = [];
  if (fm.tags) {
    try {
      // Try to parse array like ["tag1", "tag2"]
      const tagStr = fm.tags.replace(/'/g, '"');
      tags = JSON.parse(tagStr);
    } catch (e) {
      // Fallback
      tags = fm.tags.replace(/[\[\]"]/g, '').split(',').map(t => t.trim());
    }
  }

  blogData.push({
    file,
    title: fm.title || slug,
    slug,
    primaryKeyword,
    tags,
    published: fm.published !== 'false'
  });
});

// Generate Markdown Table
let markdown = `# Lisan.pk Blog Posts & SEO Primary Keywords\n\n`;
markdown += `This document lists all **${blogData.length}** blog posts currently in the codebase, along with their derived primary SEO keywords, titles, and tags.\n\n`;
markdown += `| # | Blog Title | Target SEO Primary Keyword | Slug | Status | Tags |\n`;
markdown += `|---|------------|----------------------------|------|--------|------|\n`;

blogData.forEach((blog, idx) => {
  const statusIcon = blog.published ? '✅ Published' : '📝 Draft';
  const tagsStr = blog.tags.join(', ');
  markdown += `| ${idx + 1} | **${blog.title}** | \`${blog.primaryKeyword}\` | \`${blog.slug}\` | ${statusIcon} | ${tagsStr} |\n`;
});

// Also write a JSON file for backup/reference if needed
fs.writeFileSync(path.join(__dirname, '../blog_seo_keywords.md'), markdown);
console.log(`Successfully extracted ${blogData.length} blog posts to blog_seo_keywords.md`);
