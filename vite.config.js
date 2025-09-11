import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          swiper: ['swiper'],
          i18n: ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          animations: ['aos', 'gsap'],
          ui: ['lucide-react'],
        },
      },
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'esbuild',
    // Enable source maps for production debugging
    sourcemap: false,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers for better performance
    target: 'esnext',
    // Enable tree shaking
    treeshake: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'swiper/react', 
      'swiper/modules',
      'i18next',
      'react-i18next',
      'aos',
      'lucide-react'
    ],
  },
  // Performance optimizations
  esbuild: {
    target: 'esnext',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
  // Enable compression
  server: {
    compress: true,
  },
  preview: {
    compress: true,
  },
})
