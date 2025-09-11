import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { compression } from 'vite-plugin-compression2'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    compression({
      algorithm: 'gzip',
      threshold: 1024,
      minRatio: 0.8,
    }),
    compression({
      algorithm: 'brotliCompress',
      threshold: 1024,
      minRatio: 0.8,
    }),
  ],
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
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
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
    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4KB
    // Enable compression
    reportCompressedSize: true,
    // Optimize for production
    minifyInternalExports: true,
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
