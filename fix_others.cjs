const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/<title> Malsha & Rasika wedding invitation <\/title>/, '<title> Malsha & Nuwan wedding invitation </title>');
fs.writeFileSync('index.html', indexHtml, 'utf8');

let packageJson = fs.readFileSync('package.json', 'utf8');
packageJson = packageJson.replace(/"name": "malsha-rasika-wedding"/, '"name": "malsha-nuwan-wedding"');
fs.writeFileSync('package.json', packageJson, 'utf8');

console.log('Fixed index.html and package.json');
