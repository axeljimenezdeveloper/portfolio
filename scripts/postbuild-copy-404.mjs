// File: scripts/postbuild-copy-404.mjs
// GitHub Pages serves `404.html` for any unknown path. Copying the built
// index.html to 404.html lets React Router take over client-side.
import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist');
const indexPath = join(distDir, 'index.html');
const notFoundPath = join(distDir, '404.html');

if (!existsSync(indexPath)) {
  console.error('postbuild-copy-404: dist/index.html not found. Did Vite build succeed?');
  process.exit(1);
}

copyFileSync(indexPath, notFoundPath);
console.log('postbuild-copy-404: created dist/404.html');
