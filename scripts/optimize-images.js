#!/usr/bin/env node

/**
 * Image optimization script
 * This script helps optimize images for better performance
 * Run with: node scripts/optimize-images.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Image optimization recommendations
const imageOptimizations = {
  // Critical images that should be preloaded
  critical: [
    'public/bento/bento1.jpg',
    'public/fillings/plombir-min.webp',
    'public/candybar/capsuniPlombir-min.jpg',
    'public/main_logo.png'
  ],
  
  // Images that should be lazy loaded
  lazy: [
    'public/bento/bento2.jpg',
    'public/bento/bento3.jpg',
    'public/bento/bento4.jpg',
    'public/bento/bento5.jpg',
    'public/bento/bento6.jpg',
    'public/bento/bento7.mp4',
    'public/bento/bento8.mp4'
  ],
  
  // Recommendations for image optimization
  recommendations: {
    'public/bento/': {
      maxWidth: 800,
      quality: 85,
      format: 'webp'
    },
    'public/candybar/': {
      maxWidth: 600,
      quality: 90,
      format: 'webp'
    },
    'public/fillings/': {
      maxWidth: 400,
      quality: 90,
      format: 'webp'
    }
  }
};

function checkImageOptimizations() {
  console.log('🔍 Checking image optimizations...\n');
  
  let totalSize = 0;
  let optimizedCount = 0;
  let needsOptimization = 0;
  
  // Check critical images
  console.log('📌 Critical Images (should be preloaded):');
  imageOptimizations.critical.forEach(imagePath => {
    const fullPath = path.join(process.cwd(), imagePath);
    if (fs.existsSync(fullPath)) {
      const stats = fs.statSync(fullPath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      totalSize += stats.size;
      console.log(`  ✅ ${imagePath} - ${sizeKB} KB`);
      optimizedCount++;
    } else {
      console.log(`  ❌ ${imagePath} - NOT FOUND`);
    }
  });
  
  console.log('\n🖼️ Lazy Load Images:');
  imageOptimizations.lazy.forEach(imagePath => {
    const fullPath = path.join(process.cwd(), imagePath);
    if (fs.existsSync(fullPath)) {
      const stats = fs.statSync(fullPath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      totalSize += stats.size;
      console.log(`  📱 ${imagePath} - ${sizeKB} KB`);
      
      // Check if needs optimization
      if (stats.size > 100 * 1024) { // > 100KB
        needsOptimization++;
        console.log(`    ⚠️  Consider optimizing (${sizeKB} KB > 100KB)`);
      }
    } else {
      console.log(`  ❌ ${imagePath} - NOT FOUND`);
    }
  });
  
  console.log('\n📊 Summary:');
  console.log(`  Total images: ${optimizedCount + imageOptimizations.lazy.length}`);
  console.log(`  Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Images needing optimization: ${needsOptimization}`);
  
  console.log('\n💡 Optimization Recommendations:');
  console.log('  1. Use WebP format for better compression');
  console.log('  2. Compress images to 80-90% quality');
  console.log('  3. Resize images to appropriate dimensions');
  console.log('  4. Use responsive images with srcset');
  console.log('  5. Implement lazy loading for below-the-fold images');
  
  console.log('\n🛠️  Tools you can use:');
  console.log('  - ImageOptim (Mac): https://imageoptim.com/');
  console.log('  - TinyPNG: https://tinypng.com/');
  console.log('  - Squoosh: https://squoosh.app/');
  console.log('  - Sharp (CLI): npm install -g sharp-cli');
}

function generateImageOptimizationReport() {
  const report = {
    timestamp: new Date().toISOString(),
    criticalImages: imageOptimizations.critical,
    lazyImages: imageOptimizations.lazy,
    recommendations: imageOptimizations.recommendations,
    performanceTips: [
      'Use WebP format for 25-35% better compression than JPEG',
      'Implement responsive images with srcset',
      'Preload critical above-the-fold images',
      'Use lazy loading for below-the-fold images',
      'Compress images to 80-90% quality',
      'Consider using a CDN for image delivery'
    ]
  };
  
  const reportPath = path.join(process.cwd(), 'image-optimization-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📄 Report saved to: ${reportPath}`);
}

// Run the optimization check
if (import.meta.url === `file://${process.argv[1]}`) {
  checkImageOptimizations();
  generateImageOptimizationReport();
}

export { imageOptimizations, checkImageOptimizations };
