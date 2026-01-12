# Tauri Build Environment Setup
$env:ANDROID_HOME = "C:\Users\kaart\AppData\Local\Android\Sdk"
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
$env:CARGO_HOME = "$env:USERPROFILE\.cargo"
$env:RUSTUP_HOME = "$env:USERPROFILE\.rustup"
$env:Path = "$env:CARGO_HOME\bin;$env:ANDROID_HOME\platform-tools;$env:ANDROID_HOME\build-tools\34.0.0;$env:ANDROID_HOME\cmdline-tools\latest\bin;$env:JAVA_HOME\bin;" + $env:Path

# Set permanently
[System.Environment]::SetEnvironmentVariable("ANDROID_HOME", $env:ANDROID_HOME, "User")
[System.Environment]::SetEnvironmentVariable("JAVA_HOME", $env:JAVA_HOME, "User")

Write-Host "✅ Environment configured!" -ForegroundColor Green
Write-Host ""
Write-Host "Build Commands:" -ForegroundColor Cyan
Write-Host "  Windows: npm run build:windows"
Write-Host "  Android: npm run android:init (first time)"
Write-Host "           npm run build:android"
