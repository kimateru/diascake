import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const CakesDropdown = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const cakeLinks = [
    { key: 'constructor', href: '#cake-builder-section', label: 'navbar.cakeConstructor', section: 'cake-builder-section' },
    { key: 'birthday', href: '#birthday-cakes', label: 'navbar.birthdayCakes', section: 'BirthdayCakes' },
    { key: 'bento', href: '#bento-cakes', label: 'navbar.bentoCakes', section: 'BentoCakes' },
    { key: 'wedding', href: '#wedding-cakes', label: 'navbar.weddingCakes', section: 'WeddingsCakes' },
    { key: 'candybar', href: '#candybar', label: 'navbar.candybar', section: 'Candybar' },
    { key: 'partner', href: '#partner-projects', label: 'navbar.partnerProjects', section: 'PartnerProjects' },
  ];

  // Scroll to section function (same as in Navbar)
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (section) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-1 text-gray-800 hover:text-main-brown transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-main-brown focus:ring-offset-2 rounded-md px-2 py-1 font-medium text-sm tracking-wider uppercase cursor-pointer"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t('navbar.ourCakes', 'Our Cakes')}
      >
        <span>
          {t('navbar.ourCakes', 'Our Cakes')}
        </span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-3 z-50 transition-all duration-200 ${
          isOpen 
            ? 'opacity-100 visible transform translate-y-0' 
            : 'opacity-0 invisible transform -translate-y-2'
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        role="menu"
        aria-orientation="vertical"
      >
        {cakeLinks.map((link, index) => (
          <button
            key={link.key}
            onClick={() => handleLinkClick(link.section)}
            className="relative block w-full text-left px-4 py-3 text-sm font-medium text-gray-800 hover:text-main-brown transition-colors duration-200 group tracking-wider uppercase cursor-pointer"
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
            aria-label={t(link.label)}
          >
            {t(link.label)}
            <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-main-brown transition-all duration-300 group-hover:w-[calc(100%-2rem)]" aria-hidden="true"></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CakesDropdown;
