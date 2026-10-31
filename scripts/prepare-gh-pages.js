const fs = require('fs');
const path = require('path');

const distBrowser = path.resolve(__dirname, '..', 'dist', 'namkeen-brand-website', 'browser');
const indexPath = path.join(distBrowser, 'index.html');
const notFoundPath = path.join(distBrowser, '404.html');
const noJekyllPath = path.join(distBrowser, '.nojekyll');

if (!fs.existsSync(indexPath)) {
  console.error('Error: index.html not found at ' + indexPath);
  process.exit(1);
}

// 1. Copy index.html to 404.html so Angular client-side routes work on GitHub Pages reload
fs.copyFileSync(indexPath, notFoundPath);
console.log('✓ Created 404.html for Angular SPA routing on GitHub Pages');

// 2. Create .nojekyll so GitHub Pages does not ignore underscore-prefixed assets
fs.writeFileSync(noJekyllPath, '');
console.log('✓ Created .nojekyll');
