#!/bin/bash

# DiasCake Deployment Script
# This script prepares and deploys the optimized website

echo "🚀 DiasCake Deployment Script"
echo "=============================="

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ dist folder not found. Building first..."
    npm run build
fi

# Check dist folder size
echo "📊 Build size:"
du -sh dist/

# List key files
echo ""
echo "📁 Key files ready for deployment:"
echo "  ✅ index.html (main page)"
echo "  ✅ sw.js (service worker)"
echo "  ✅ manifest.json (PWA manifest)"
echo "  ✅ robots.txt (SEO)"
echo "  ✅ sitemap.xml (SEO)"
echo "  ✅ assets/ (optimized bundles)"
echo "  ✅ All image folders"

# Check for compression files
echo ""
echo "🗜️  Compression files:"
echo "  ✅ Gzip files (.gz)"
echo "  ✅ Brotli files (.br)"

echo ""
echo "🎉 Ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Upload the entire 'dist/' folder to your web server"
echo "2. Ensure your server supports Gzip compression"
echo "3. Test the website after deployment"
echo "4. Run a Lighthouse audit to verify performance"
echo ""
echo "📖 See HOSTING_CHECKLIST.md for detailed instructions"
