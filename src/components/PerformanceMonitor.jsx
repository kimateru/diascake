import { memo, useEffect } from 'react';

const PerformanceMonitor = memo(() => {
  useEffect(() => {
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !window.location.search.includes('debug=perf')) {
      return;
    }

    // Monitor Core Web Vitals
    const measurePerformance = () => {
      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              console.log('🎨 First Contentful Paint:', entry.startTime.toFixed(2), 'ms');
            }
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      }

      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('🖼️ Largest Contentful Paint:', lastEntry.startTime.toFixed(2), 'ms');
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // First Input Delay (FID)
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('⚡ First Input Delay:', entry.processingStart - entry.startTime, 'ms');
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      }

      // Cumulative Layout Shift (CLS)
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          console.log('📐 Cumulative Layout Shift:', clsValue.toFixed(4));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Monitor resource loading
    const monitorResources = () => {
      if ('PerformanceObserver' in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'resource') {
              const loadTime = entry.responseEnd - entry.startTime;
              if (loadTime > 1000) { // Log slow resources (>1s)
                console.warn('🐌 Slow resource:', entry.name, loadTime.toFixed(2), 'ms');
              }
            }
          }
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
      }
    };

    // Monitor image loading performance
    const monitorImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        const startTime = performance.now();
        
        img.addEventListener('load', () => {
          const loadTime = performance.now() - startTime;
          if (loadTime > 500) { // Log slow images (>500ms)
            console.warn('🖼️ Slow image load:', img.src, loadTime.toFixed(2), 'ms');
          }
        });

        img.addEventListener('error', () => {
          console.error('❌ Image failed to load:', img.src);
        });
      });
    };

    // Monitor bundle sizes
    const monitorBundleSizes = () => {
      if ('PerformanceObserver' in window) {
        const navigationObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              const transferSize = entry.transferSize;
              const decodedBodySize = entry.decodedBodySize;
              const compressionRatio = ((decodedBodySize - transferSize) / decodedBodySize * 100).toFixed(1);
              
              console.log('📦 Page size:', {
                transfer: (transferSize / 1024).toFixed(2) + ' KB',
                decoded: (decodedBodySize / 1024).toFixed(2) + ' KB',
                compression: compressionRatio + '%'
              });
            }
          }
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });
      }
    };

    // Run all monitoring
    measurePerformance();
    monitorResources();
    monitorBundleSizes();
    
    // Monitor images after a short delay to ensure they're loaded
    setTimeout(monitorImages, 1000);

    // Log performance summary after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        console.log('🚀 Page load time:', loadTime.toFixed(2), 'ms');
        
        // Log total resources
        const resources = performance.getEntriesByType('resource');
        console.log('📊 Total resources loaded:', resources.length);
        
        // Log image count
        const images = document.querySelectorAll('img');
        console.log('🖼️ Total images:', images.length);
      }, 100);
    });

  }, []);

  return null; // This component doesn't render anything
});

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;
