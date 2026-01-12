#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Set Rust environment
const cargoHome = path.join(process.env.USERPROFILE, '.cargo');
const rustupHome = path.join(process.env.USERPROFILE, '.rustup');
process.env.CARGO_HOME = cargoHome;
process.env.RUSTUP_HOME = rustupHome;
process.env.PATH = `${path.join(cargoHome, 'bin')};${process.env.PATH}`;

console.log('🚀 Starting Android APK build...\n');

const projectRoot = path.join(__dirname, '..');

try {
  console.log('📱 Building Android APK with Tauri...');
  execSync('npm run build:android', { 
    stdio: 'inherit', 
    cwd: projectRoot,
    env: process.env 
  });

  console.log('\n📦 Searching for built APK...');
  
  const tauriDir = path.join(projectRoot, 'src-tauri');
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
    const publicDir = path.join(projectRoot, 'public');
    const downloadsDir = path.join(publicDir, 'downloads');
    
    if (!fs.existsSync(downloadsDir)) {
      fs.mkdirSync(downloadsDir, { recursive: true });
    }
    
    const destPath = path.join(downloadsDir, 'flavor-town.apk');
    fs.copyFileSync(apkPath, destPath);
    
    const stats = fs.statSync(destPath);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    console.log('\n✅ APK build successful!');
    console.log(`📍 APK copied to: ${destPath}`);
    console.log(`📊 Size: ${fileSizeMB} MB`);
    console.log('\n🌐 APK available at: /downloads/flavor-town.apk');
  } else {
    console.error('\n❌ Could not find built APK');
    console.log('Searched in:');
    searchPaths.forEach(p => console.log(`  - ${p}`));
    process.exit(1);
  }

} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
