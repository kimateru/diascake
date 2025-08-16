import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import CTAButton from './CTAButton';

const Header = memo(() => {
  const { t } = useTranslation();

  return (
    <header 
      className="relative h-[94dvh] flex items-center justify-start text-white overflow-hidden"
      role="banner"
      aria-label={t('header.ariaLabels.heroSection')}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80')`
        }}
        aria-hidden="true"
        role="img"
        aria-label={t('header.ariaLabels.backgroundImage')}
      />
      
      {/* Content - Aligned with Navbar Container */}
      <div className="relative z-10 w-full">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-left max-w-3xl">
            <div className="space-y-6">
              <h1 className="text-[42px] md:text-7xl font-semibold tracking-wide leading-tight">
                <span className="block">{t('header.title')}</span>
              </h1>
              
              <p 
                className="text-md md:text-xl font-medium max-w-3xl mt-8 leading-relaxed"
                role="text"
                aria-label={t('header.ariaLabels.missionStatement')}
              >
                {t('header.description')}
              </p>
              
              <div className="mt-10">
                {/* Reuse CTA button component */}
                <CTAButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle overlay pattern */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" 
        aria-hidden="true"
      />
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
