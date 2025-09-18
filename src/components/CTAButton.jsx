import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const CTAButton = memo(({ className }) => {
  const { t } = useTranslation();

  return (
    <a
      href="tel:+079426659"
      className={`inline-block bg-white text-gray-900 px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-200 border border-main-brown transform hover:-translate-y-0.5 cursor-pointer hover:bg-main-brown hover:text-white ${className}`}
      aria-label={t('header.ariaLabels.exploreMenu')}
      title={t('header.ariaLabels.discoverTreats')}
    >
      {t('header.cta')}
    </a>
  );
});

CTAButton.displayName = 'CTAButton';

export default CTAButton;


