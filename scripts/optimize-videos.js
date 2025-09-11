#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const videoOptimizations = {
  'bento7.mp4': {
    currentSize: '2.4M',
    targetSize: '1.2M',
    compression: '50%',
    quality: 'medium',
    resolution: '720p'
  },
  'bento8.mp4': {
    currentSize: '4.1M', 
    targetSize: '2.0M',
    compression: '50%',
    quality: 'medium',
    resolution: '720p'
  }
};

function checkVideoOptimizations() {
  console.log('🎬 Video Optimization Analysis');
  console.log('==============================\n');

  const bentoDir = path.join(__dirname, '..', 'public', 'bento');
  
  if (!fs.existsSync(bentoDir)) {
    console.log('❌ Bento directory not found');
    return;
  }

  const videoFiles = fs.readdirSync(bentoDir).filter(file => file.endsWith('.mp4'));
  
  if (videoFiles.length === 0) {
    console.log('❌ No MP4 files found in bento directory');
    return;
  }

  console.log('📊 Current Video Status:');
  videoFiles.forEach(file => {
    const filePath = path.join(bentoDir, file);
    const stats = fs.statSync(filePath);
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(1);
    
    console.log(`  ${file}: ${sizeInMB}MB`);
  });

  console.log('\n🎯 Optimization Recommendations:');
  console.log('================================');
  
  Object.entries(videoOptimizations).forEach(([filename, config]) => {
    console.log(`\n📹 ${filename}:`);
    console.log(`  Current: ${config.currentSize}`);
    console.log(`  Target:  ${config.targetSize} (${config.compression} reduction)`);
    console.log(`  Quality: ${config.quality}`);
    console.log(`  Resolution: ${config.resolution}`);
  });

  console.log('\n🛠️  Manual Optimization Commands:');
  console.log('==================================');
  console.log('Install FFmpeg first: brew install ffmpeg (macOS) or apt install ffmpeg (Ubuntu)');
  console.log('');
  
  Object.entries(videoOptimizations).forEach(([filename, config]) => {
    const inputPath = path.join(bentoDir, filename);
    const outputPath = path.join(bentoDir, filename.replace('.mp4', '_optimized.mp4'));
    
    console.log(`# Optimize ${filename}:`);
    console.log(`ffmpeg -i "${inputPath}" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k -movflags +faststart "${outputPath}"`);
    console.log('');
  });

  console.log('💡 Additional Optimization Tips:');
  console.log('================================');
  console.log('1. Use WebM format for better compression (if supported)');
  console.log('2. Consider creating poster images for faster loading');
  console.log('3. Implement progressive loading (load first few seconds)');
  console.log('4. Use video thumbnails for better UX');
  console.log('5. Consider lazy loading with intersection observer');
}

function generateVideoOptimizationReport() {
  const report = {
    timestamp: new Date().toISOString(),
    videos: videoOptimizations,
    recommendations: [
      'Compress videos to 50% of current size',
      'Use H.264 codec with CRF 28',
      'Add poster images for faster loading',
      'Implement progressive video loading',
      'Consider WebM format for better compression'
    ],
    tools: {
      ffmpeg: 'Video compression and optimization',
      handbrake: 'GUI video compression tool',
      online: 'CloudConvert, Clipchamp, etc.'
    }
  };

  const reportPath = path.join(__dirname, '..', 'video-optimization-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📄 Report saved to: ${reportPath}`);
}

// Run the optimization check
if (import.meta.url === `file://${process.argv[1]}`) {
  checkVideoOptimizations();
  generateVideoOptimizationReport();
}

export { videoOptimizations, checkVideoOptimizations };
