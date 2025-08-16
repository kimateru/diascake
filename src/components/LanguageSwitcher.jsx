import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = memo(() => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'ru' ? 'ro' : 'ru';
    i18n.changeLanguage(newLanguage);
    // Update HTML lang attribute for SEO
    document.documentElement.lang = newLanguage;
  };

  const currentLang = i18n.language === 'ru' ? 'RU' : 'RO';
  const displayLang = i18n.language === 'ru' ? 'RO' : 'RU'; // Show opposite language
  const nextLang = i18n.language === 'ru' ? 'RO' : 'RU';

  return (
    <button
      onClick={toggleLanguage}
      className="relative text-gray-800 hover:text-main-brown font-medium text-sm tracking-wider uppercase transition-colors duration-200 group px-3 py-1 cursor-pointer flex items-center gap-1"
      aria-label={`Current language: ${currentLang}. Click to switch to ${nextLang}`}
      title={`Switch to ${nextLang}`}
      type="button"
    >
      <span className="relative">
        {displayLang}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-main-brown transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
      </span>
    </button>
  );
});

LanguageSwitcher.displayName = 'LanguageSwitcher';

export default LanguageSwitcher;
