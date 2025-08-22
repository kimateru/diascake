import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram } from 'lucide-react';

const Footer = memo(() => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Left Links */}
          <div className="flex flex-col space-y-4 items-center lg:items-start lg:justify-start">
            <button
              onClick={() => scrollToSection('Fillings')}
              className="text-center lg:text-left text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              type="button"
            >
              {t('navbar.fillings')}
            </button>
            <button
              onClick={() => scrollToSection('Candybar')}
              className="text-center lg:text-left text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              type="button"
            >
              {t('navbar.candybar')}
            </button>
            <button
              onClick={() => scrollToSection('PartnerProjects')}
              className="text-center lg:text-left text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              type="button"
            >
              {t('navbar.partnerProjects')}
            </button>
          </div>

          {/* Center - Logo and CTA */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <img
                src="/main_logo.png"
                alt="Dias Cake Logo"
                className="h-16 w-auto filter brightness-0 invert"
                width="auto"
                height="64"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              {t('footer.ctaTitle')}
            </h3>
            <p className="text-gray-300 mb-8 max-w-sm">
              {t('footer.ctaSubtitle')}
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-6 mb-8">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors duration-200"
                aria-label={t('footer.socialMedia.facebook')}
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors duration-200"
                aria-label={t('footer.socialMedia.instagram')}
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors duration-200"
                aria-label={t('footer.socialMedia.tiktok')}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.16 20.5a6.33 6.33 0 0 0 10.86-4.43V7.83a8.24 8.24 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.2-.26z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Links */}
          <div className="flex flex-col space-y-4 items-center lg:items-end">
            <button
              onClick={() => scrollToSection('WeddingsCakes')}
              className="text-center lg:text-right text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              type="button"
            >
              {t('navbar.weddingCakes')}
            </button>
            <button
              onClick={() => scrollToSection('BirthdayCakes')}
              className="text-center lg:text-right text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              type="button"
            >
              {t('navbar.birthdayCakes')}
            </button>
            <button
              onClick={() => scrollToSection('BentoCakes')}
              className="text-center lg:text-right text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              type="button"
            >
              {t('navbar.bentoCakes')}
            </button>
            <button
              onClick={() => scrollToSection('Contacts')}
              className="text-center lg:text-right text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              type="button"
            >
              {t('navbar.contacts')}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t('footer.allRightsReserved')}
          </p>
        </div>

      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
