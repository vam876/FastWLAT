#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('='.repeat(70));
console.log('FastWLAT Build Verification');
console.log('='.repeat(70));
console.log();

let hasError = false;
let warnings = [];

const requiredFiles = {
  'Backend Source': [
    'src/main/index.ts',
    'src/main/ipGeoLocationService.ts',
    'src/preload/index.ts',
    'src/preload/index.d.ts'
  ],
  'Compiled Backend': [
    'out/main/index.js',
    'out/preload/index.js'
  ],
  'Compiled Frontend': [
    'out/renderer/index.html',
    'out/renderer/assets'
  ],
  'GeoIP Databases': [
    'data/GeoLite2-City.mmdb',
    'data/GeoLite2-Country.mmdb',
    'data/GeoLite2-ASN.mmdb'
  ],
  'Resources': [
    'out/renderer/example_logs/test.log',
    'out/renderer/maps/china.json',
    'out/renderer/maps/world.json',
    'resources/icon.png'
  ],
  'Configuration': [
    'package.json',
    'tsconfig.json',
    'electron-builder.yml'
  ],
  'Documentation': [
    'README.md',
    'LICENSE',
    'DEVELOPMENT.md',
    'docs/README.md'
  ]
};

function checkFile(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  const exists = fs.existsSync(fullPath);
  
  if (exists) {
    const stats = fs.statSync(fullPath);
    const size = stats.isDirectory() ? 'DIR' : formatSize(stats.size);
    return { exists: true, size };
  }
  
  return { exists: false, size: null };
}

function formatSize(bytes) {
  if (bytes > 1024 * 1024) {
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  } else if (bytes > 1024) {
    return `${(bytes / 1024).toFixed(2)} KB`;
  }
  return `${bytes} B`;
}

console.log('Checking required files...\n');

for (const [category, files] of Object.entries(requiredFiles)) {
  console.log(`📋 ${category}`);
  console.log('-'.repeat(70));
  
  for (const file of files) {
    const result = checkFile(file);
    
    if (result.exists) {
      console.log(`  ✅ ${file} ${result.size !== 'DIR' ? `(${result.size})` : ''}`);
    } else {
      console.log(`  ❌ ${file} - MISSING`);
      hasError = true;
    }
  }
  
  console.log();
}

console.log('Checking dependencies...\n');
console.log('📦 Node Modules');
console.log('-'.repeat(70));

const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
if (fs.existsSync(nodeModulesPath)) {
  const packages = fs.readdirSync(nodeModulesPath).filter(p => !p.startsWith('.'));
  console.log(`  ✅ node_modules exists (${packages.length} packages)`);
  
  const criticalDeps = ['electron', 'maxmind', 'dexie', '@electron-toolkit/preload', '@electron-toolkit/utils'];
  for (const dep of criticalDeps) {
    const depPath = path.join(nodeModulesPath, dep);
    if (fs.existsSync(depPath)) {
      console.log(`  ✅ ${dep}`);
    } else {
      console.log(`  ❌ ${dep} - NOT INSTALLED`);
      hasError = true;
    }
  }
} else {
  console.log('  ❌ node_modules not found - run npm install');
  hasError = true;
}

console.log();
console.log('Checking package.json...\n');
console.log('📄 Package Configuration');
console.log('-'.repeat(70));

const packageJsonPath = path.join(__dirname, '..', 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  
  console.log(`  Name: ${packageJson.name}`);
  console.log(`  Version: ${packageJson.version}`);
  console.log(`  License: ${packageJson.license}`);
  console.log(`  Main: ${packageJson.main}`);
  
  if (!packageJson.name || packageJson.name === 'FastWLAT') {
    warnings.push('Package name should be lowercase (e.g., fastwlat)');
  }
  
  if (!packageJson.repository) {
    warnings.push('Repository URL not set in package.json');
  }
  
  if (!packageJson.keywords || packageJson.keywords.length === 0) {
    warnings.push('No keywords defined in package.json');
  }
}

console.log();
console.log('Project Statistics\n');
console.log('📊 Size Analysis');
console.log('-'.repeat(70));

function getDirectorySize(dirPath) {
  let totalSize = 0;
  
  function traverse(currentPath) {
    try {
      const stats = fs.statSync(currentPath);
      if (stats.isFile()) {
        totalSize += stats.size;
      } else if (stats.isDirectory()) {
        const files = fs.readdirSync(currentPath);
        files.forEach(file => {
          traverse(path.join(currentPath, file));
        });
      }
    } catch (error) {}
  }
  
  if (fs.existsSync(dirPath)) {
    traverse(dirPath);
  }
  
  return totalSize;
}

const directories = [
  { name: 'Backend Source (src/)', path: 'src' },
  { name: 'Compiled Output (out/)', path: 'out' },
  { name: 'GeoIP Data (data/)', path: 'data' },
  { name: 'Resources (resources/)', path: 'resources' }
];

for (const dir of directories) {
  const dirPath = path.join(__dirname, '..', dir.path);
  const size = getDirectorySize(dirPath);
  console.log(`  ${dir.name}: ${formatSize(size)}`);
}

console.log();
console.log('='.repeat(70));

if (warnings.length > 0) {
  console.log('⚠️  Warnings:');
  warnings.forEach(warning => console.log(`  - ${warning}`));
  console.log();
}

if (hasError) {
  console.log('❌ Verification FAILED - Missing required files or dependencies');
  console.log('='.repeat(70));
  process.exit(1);
} else {
  console.log('✅ Verification PASSED - Project is ready for distribution');
  console.log('='.repeat(70));
  process.exit(0);
}
