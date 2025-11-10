import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
  },
  resolve: {
    alias: {
      'react-slick': 'react-slick/lib/index.js',
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react-slick', 'slick-carousel'],
    esbuildOptions: {
      target: 'es2020',
    },
  },
  build: {
    target: 'es2020',
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', 'react-slick', 'slick-carousel'],
        },
      },
    },
  },
});
