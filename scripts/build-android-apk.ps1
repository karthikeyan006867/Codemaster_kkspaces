#!/usr/bin/env pwsh

Write-Host "🚀 Starting Tauri Android APK build..." -ForegroundColor Cyan
Write-Host ""

$tauriCli = Join-Path $PSScriptRoot ".." "node_modules" "@tauri-apps" "cli" "index.js"

# Ensure public/downloads directory exists
$publicDir = Join-Path $PSScriptRoot ".." "public"
$downloadsDir = Join-Path $publicDir "downloads"

if (-not (Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir -Force | Out-Null
}

if (-not (Test-Path $downloadsDir)) {
    New-Item -ItemType Directory -Path $downloadsDir -Force | Out-Null
    Write-Host "✅ Created downloads directory" -ForegroundColor Green
}

try {
    Write-Host "📱 Initializing Tauri Android..." -ForegroundColor Yellow
    try {
        node $tauriCli android init 2>&1 | Out-Null
    } catch {
        Write-Host "ℹ️  Android already initialized, continuing..." -ForegroundColor Gray
    }

    Write-Host ""
    Write-Host "🔨 Building Android APK..." -ForegroundColor Yellow
    node $tauriCli android build --apk

    Write-Host ""
    Write-Host "📦 Searching for built APK..." -ForegroundColor Yellow
    
    # Find the APK file
    $tauriDir = Join-Path $PSScriptRoot ".." "src-tauri"
    $genDir = Join-Path $tauriDir "gen" "android"
    
    $searchPaths = @(
        (Join-Path $genDir "app\build\outputs\apk\universal\release\app-universal-release-unsigned.apk"),
        (Join-Path $genDir "app\build\outputs\apk\universal\release\app-universal-release.apk"),
        (Join-Path $genDir "app\build\outputs\apk\release\app-release-unsigned.apk"),
        (Join-Path $genDir "app\build\outputs\apk\release\app-release.apk")
    )

    $apkPath = $null
    foreach ($path in $searchPaths) {
        if (Test-Path $path) {
            $apkPath = $path
            break
        }
    }

    if ($apkPath -and (Test-Path $apkPath)) {
        $destPath = Join-Path $downloadsDir "flavor-town.apk"
        Copy-Item -Path $apkPath -Destination $destPath -Force
        
        $fileSize = (Get-Item $destPath).Length / 1MB
        $fileSizeMB = [math]::Round($fileSize, 2)
        
        Write-Host ""
        Write-Host "✅ APK build successful!" -ForegroundColor Green
        Write-Host "📍 APK copied to: $destPath" -ForegroundColor Green
        Write-Host "📊 Size: $fileSizeMB MB" -ForegroundColor Green
        Write-Host ""
        Write-Host "🌐 APK will be available at: /downloads/flavor-town.apk" -ForegroundColor Cyan
    } else {
        Write-Host ""
        Write-Host "❌ Could not find built APK file" -ForegroundColor Red
        Write-Host "Searched in:" -ForegroundColor Red
        foreach ($path in $searchPaths) {
            Write-Host "  - $path" -ForegroundColor Gray
        }
        exit 1
    }

} catch {
    Write-Host ""
    Write-Host "❌ Build failed: $_" -ForegroundColor Red
    exit 1
}
