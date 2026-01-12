import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const msiPath = path.join(process.cwd(), 'src-tauri', 'target', 'release', 'bundle', 'msi');
    
    // Find the MSI file
    let msiFiles: string[] = [];
    try {
      const files = await fs.readdir(msiPath);
      msiFiles = files.filter(f => f.endsWith('.msi'));
    } catch {
      return NextResponse.json(
        { error: 'Windows installer not found. Please build the Windows app first using: npm run tauri:build:windows' },
        { status: 404 }
      );
    }

    if (msiFiles.length === 0) {
      return NextResponse.json(
        { error: 'No MSI installer found. Please build the app first.' },
        { status: 404 }
      );
    }

    // Get the first MSI file (should only be one)
    const msiFile = path.join(msiPath, msiFiles[0]);
    const fileBuffer = await fs.readFile(msiFile);
    const stats = await fs.stat(msiFile);

    // Return the MSI file with proper headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/x-msi',
        'Content-Disposition': `attachment; filename="flavor-town-setup.msi"`,
        'Content-Length': stats.size.toString(),
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('Error serving MSI:', error);
    return NextResponse.json(
      { error: 'Failed to download Windows installer' },
      { status: 500 }
    );
  }
}

export async function HEAD(request: NextRequest) {
  try {
    const msiPath = path.join(process.cwd(), 'src-tauri', 'target', 'release', 'bundle', 'msi');
    
    try {
      const files = await fs.readdir(msiPath);
      const msiFiles = files.filter(f => f.endsWith('.msi'));
      
      if (msiFiles.length > 0) {
        const stats = await fs.stat(path.join(msiPath, msiFiles[0]));
        return new NextResponse(null, {
          headers: {
            'Content-Type': 'application/x-msi',
            'Content-Length': stats.size.toString(),
          },
        });
      }
      return NextResponse.json({ exists: false }, { status: 404 });
    } catch {
      return NextResponse.json({ exists: false }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
