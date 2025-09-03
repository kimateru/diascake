import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const StructuredData = memo(() => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Create structured data for Local Business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Bakery",
      "name": "DiasCake",
      "alternateName": "Dias Cake",
      "description": i18n.language === 'ru' 
        ? "Кондитерская в Кишинёве, специализирующаяся на свадебных тортах, тортах на день рождения и бенто тортах. Ручная работа, качественные ингредиенты."
        : "Dulciuri in Chișinău, specializată în torturi de nuntă, torturi de aniversare și torturi bento. Lucru manual, ingrediente de calitate.",
      "url": window.location.origin,
      "telephone": "+37379426659",
      "email": "diascakeshop@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Grigore Ureche 10/2",
        "addressLocality": "Durlești",
        "addressRegion": "Chișinău",
        "addressCountry": "MD"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "47.0105",
        "longitude": "28.8638"
      },
      "openingHours": [
        "Mo-Su 09:00-17:00"
      ],
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
      "currenciesAccepted": "MDL",
      "areaServed": {
        "@type": "City",
        "name": "Chișinău"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": i18n.language === 'ru' ? "Торты и десерты" : "Torturi și deserturi",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": i18n.language === 'ru' ? "Свадебные торты" : "Torturi de nuntă",
              "description": i18n.language === 'ru' ? "Элегантные свадебные торты ручной работы" : "Torturi de nuntă elegante, făcute manual"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": i18n.language === 'ru' ? "Торты на день рождения" : "Torturi de aniversare",
              "description": i18n.language === 'ru' ? "Яркие и вкусные торты для дня рождения" : "Torturi colorate și gustoase pentru ziua de naștere"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": i18n.language === 'ru' ? "Бенто торты" : "Torturi bento",
              "description": i18n.language === 'ru' ? "Компактные мини-торты для особых моментов" : "Mini-torturi compacte pentru momente speciale"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": i18n.language === 'ru' ? "Кэнди-бар" : "Candy bar",
              "description": i18n.language === 'ru' ? "Сладкие деликатесы и десерты" : "Delicii dulci și deserturi"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/diascake",
        "https://www.instagram.com/diascake",
        "https://www.tiktok.com/@diascake"
      ],
      "image": [
        `${window.location.origin}/main_logo.png`,
        `${window.location.origin}/big_logo.svg`
      ],
      "logo": `${window.location.origin}/main_logo.png`,
      "foundingDate": "2024",
      "founder": {
        "@type": "Person",
        "name": "DiasCake Team"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Maria P."
          },
          "reviewBody": i18n.language === 'ru' 
            ? "Потрясающий свадебный торт! Вкус невероятный, дизайн превзошел все ожидания."
            : "Tort de nuntă uimitor! Gustul este incredibil, designul a depășit toate așteptările."
        }
      ]
    };

    // Add structured data script to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [t, i18n.language]);

  return null;
});

StructuredData.displayName = 'StructuredData';

export default StructuredData;
