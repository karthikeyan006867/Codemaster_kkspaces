import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const apkPath = path.join(process.cwd(), 'public', 'downloads', 'flavor-town.apk');
    
    // Check if APK exists
    try {
      await fs.access(apkPath);
    } catch {
      return NextResponse.json(
        { error: 'APK not found. Please build the Android app first using: npm run build:android' },
        { status: 404 }
      );
    }

    // Read the APK file
    const fileBuffer = await fs.readFile(apkPath);
    const stats = await fs.stat(apkPath);

    // Return the APK file with proper headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Disposition': 'attachment; filename="flavor-town.apk"',
        'Content-Length': stats.size.toString(),
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('Error serving APK:', error);
    return NextResponse.json(
      { error: 'Failed to download APK file' },
      { status: 500 }
    );
  }
}

export async function HEAD(request: NextRequest) {
  try {
    const apkPath = path.join(process.cwd(), 'public', 'downloads', 'flavor-town.apk');
    
    try {
      const stats = await fs.stat(apkPath);
      return new NextResponse(null, {
        headers: {
          'Content-Type': 'application/vnd.android.package-archive',
          'Content-Length': stats.size.toString(),
        },
      });
    } catch {
      return NextResponse.json({ exists: false }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
