// File: vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site:   VITE_BASE_PATH=/<repo-name>/
// Custom domain (future):      VITE_BASE_PATH=/
// Local dev (default):         unset → '/'
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ?? '/',
});
