import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SEOHead = memo(() => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Update document title
    document.title = t('meta.title');
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = t('meta.description');
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', t('meta.keywords'));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = t('meta.keywords');
      document.head.appendChild(meta);
    }

    // Update Open Graph tags
    const updateOrCreateOGTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    updateOrCreateOGTag('og:title', t('meta.title'));
    updateOrCreateOGTag('og:description', t('meta.description'));
    updateOrCreateOGTag('og:type', 'website');
    updateOrCreateOGTag('og:locale', i18n.language === 'ru' ? 'ru_RU' : 'ro_RO');

    // Update Twitter Card tags
    const updateOrCreateTwitterTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    updateOrCreateTwitterTag('twitter:card', 'summary_large_image');
    updateOrCreateTwitterTag('twitter:title', t('meta.title'));
    updateOrCreateTwitterTag('twitter:description', t('meta.description'));

    // Update HTML lang attribute
    document.documentElement.lang = i18n.language;
    
    // Update canonical URL based on language
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    
    const baseUrl = window.location.origin;
    const langPath = i18n.language === 'ru' ? '' : `/${i18n.language}`;
    canonical.href = `${baseUrl}${langPath}${window.location.pathname}`;

    // Add hreflang tags for SEO
    const existingHreflangs = document.querySelectorAll('link[hreflang]');
    existingHreflangs.forEach(link => link.remove());

    const languages = ['ru', 'ro'];
    languages.forEach(lang => {
      const hreflang = document.createElement('link');
      hreflang.rel = 'alternate';
      hreflang.hreflang = lang;
      hreflang.href = `${baseUrl}${lang === 'ru' ? '' : `/${lang}`}${window.location.pathname}`;
      document.head.appendChild(hreflang);
    });

    // Add x-default hreflang
    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = `${baseUrl}${window.location.pathname}`;
    document.head.appendChild(xDefault);

  }, [t, i18n.language]);

  // This component doesn't render anything
  return null;
});

SEOHead.displayName = 'SEOHead';

export default SEOHead;
