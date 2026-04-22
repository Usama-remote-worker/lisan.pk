const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const categories = ["Translation", "Attestation", "Visa Guides", "Education"];

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w-]+/g, '')   // Remove all non-word chars
    .replace(/--+/g, '-');    // Replace multiple - with single -
}

console.log("\n🚀 Lisan.pk Blog Post Creator\n");

rl.question('Article Title: ', (title) => {
  rl.question('Summary (Short teaser): ', (summary) => {
    console.log('\nSelect Category:');
    categories.forEach((cat, index) => console.log(`${index + 1}. ${cat}`));
    
    rl.question('\nEnter number: ', (catNum) => {
      const category = categories[parseInt(catNum) - 1] || "Translation";
      const slug = slugify(title);
      const date = new Date().toISOString().split('T')[0];
      const fileName = `${slug}.md`;
      const filePath = path.join(__dirname, '../src/content/blog', fileName);

      const template = `---
title: "${title}"
date: "${date}"
summary: "${summary}"
image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
tags: ["${category}", "Update"]
category: "${category}"
author: "Admin"
readingTime: "5 min"
published: true
---

Your content goes here... Use Markdown for formatting.

## Subheading Example

- List item 1
- List item 2

[Link to a service](/services/translation)
`;

      if (fs.existsSync(filePath)) {
        console.log(`\n❌ Error: A post with the slug "${slug}" already exists!`);
        rl.close();
      } else {
        fs.writeFileSync(filePath, template);
        console.log(`\n✅ Success! New post created at: src/content/blog/${fileName}`);
        console.log(`\nNext steps:`);
        console.log(`1. Open the file and write your content.`);
        console.log(`2. Save and your site will update automatically.`);
        rl.close();
      }
    });
  });
});
