import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/frontend', // Adjust if your app is hosted on a subdirectory
  build: {
    outDir: 'dist', // Ensure the output directory is correct
  },
});
