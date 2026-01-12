#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📦 Copying APK to public/downloads...\n');

// Ensure public directory exists for build output
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Create downloads directory in public
const downloadsDir = path.join(publicDir, 'downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
  console.log('✅ Created downloads directory');
}

// Find the APK file
const tauriDir = path.join(__dirname, '..', 'src-tauri');
const genDir = path.join(tauriDir, 'gen', 'android');

let apkPath = null;
const searchPaths = [
  path.join(genDir, 'app', 'build', 'outputs', 'apk', 'universal', 'release', 'app-universal-release-unsigned.apk'),
  path.join(genDir, 'app', 'build', 'outputs', 'apk', 'universal', 'release', 'app-universal-release.apk'),
  path.join(genDir, 'app', 'build', 'outputs', 'apk', 'release', 'app-release-unsigned.apk'),
  path.join(genDir, 'app', 'build', 'outputs', 'apk', 'release', 'app-release.apk'),
];

for (const searchPath of searchPaths) {
  if (fs.existsSync(searchPath)) {
    apkPath = searchPath;
    break;
  }
}

if (apkPath && fs.existsSync(apkPath)) {
  const destPath = path.join(downloadsDir, 'flavor-town.apk');
  fs.copyFileSync(apkPath, destPath);
  
  const stats = fs.statSync(destPath);
  const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  
  console.log('✅ APK copy successful!');
  console.log(`📍 APK location: ${destPath}`);
  console.log(`📊 Size: ${fileSizeMB} MB`);
  console.log('\n🌐 APK available at: /downloads/flavor-town.apk');
} else {
  console.error('\n❌ Could not find built APK file');
  console.log('Searched in:');
  searchPaths.forEach(p => console.log(`  - ${p}`));
  process.exit(1);
}
