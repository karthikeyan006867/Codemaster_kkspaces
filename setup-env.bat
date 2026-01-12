@echo off
echo Setting up environment for Tauri builds...

:: Set Android environment
set ANDROID_HOME=C:\Users\kaart\AppData\Local\Android\Sdk
set JAVA_HOME=C:\Program Files\Android\Android Studio\jbr
set NDK_HOME=%ANDROID_HOME%\ndk\29.0.14206865

:: Set Rust environment
set CARGO_HOME=%USERPROFILE%\.cargo
set RUSTUP_HOME=%USERPROFILE%\.rustup

:: Update PATH
set PATH=%CARGO_HOME%\bin;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\build-tools\34.0.0;%ANDROID_HOME%\cmdline-tools\latest\bin;%JAVA_HOME%\bin;%PATH%

:: Set environment variables permanently
setx ANDROID_HOME "%ANDROID_HOME%"
setx JAVA_HOME "%JAVA_HOME%"

echo.
echo Environment configured!
echo.
echo Build Commands:
echo   - Windows: npm run build:windows
echo   - Android: npm run android:init (first time)
echo              npm run build:android
echo.
pause
