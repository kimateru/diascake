import { memo, useEffect } from 'react';

const Sitemap = memo(() => {
  useEffect(() => {
    // Generate sitemap data
    const baseUrl = window.location.origin;
    const sitemapData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "url": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Fillings",
          "url": `${baseUrl}#Fillings`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Wedding Cakes",
          "url": `${baseUrl}#WeddingCakes`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Birthday Cakes",
          "url": `${baseUrl}#BirthdayCakes`
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Bento Cakes",
          "url": `${baseUrl}#BentoCakes`
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Candybar",
          "url": `${baseUrl}#Candybar`
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Partner Projects",
          "url": `${baseUrl}#PartnerProjects`
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Contacts",
          "url": `${baseUrl}#Contacts`
        }
      ]
    };

    // Add sitemap structured data
    const existingSitemap = document.querySelector('script[data-sitemap="true"]');
    if (existingSitemap) {
      existingSitemap.remove();
    }

    const sitemapScript = document.createElement('script');
    sitemapScript.type = 'application/ld+json';
    sitemapScript.setAttribute('data-sitemap', 'true');
    sitemapScript.textContent = JSON.stringify(sitemapData);
    document.head.appendChild(sitemapScript);

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[data-sitemap="true"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
});

Sitemap.displayName = 'Sitemap';

export default Sitemap;
