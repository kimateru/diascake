import { memo, useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import CakesDropdown from './CakesDropdown';

const Navbar = memo(() => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef(null);
  const contentRef = useRef(null);
  const navLinksRef = useRef([]);

  // Lock/unlock scroll when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      openDrawer();
    } else {
      document.body.style.overflow = 'unset';
      if (drawerRef.current) {
        closeDrawer();
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const openDrawer = () => {
    const tl = gsap.timeline();
    const screenWidth = window.innerWidth;

    // Set initial states
    gsap.set(drawerRef.current, { display: 'block' });
    gsap.set(contentRef.current, { x: screenWidth });
    gsap.set(navLinksRef.current, { opacity: 0, x: 50 });

    // Animate in
    tl.to(contentRef.current, { x: 0, duration: 0.4, ease: 'power3.out' })
      .to(navLinksRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.2');
  };

  const closeDrawer = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(drawerRef.current, { display: 'none' });
      }
    });

    const screenWidth = window.innerWidth;

    tl.to(navLinksRef.current, {
      opacity: 0,
      x: 50,
      duration: 0.2,
      stagger: 0.05,
      ease: 'power2.in'
    })
      .to(contentRef.current, { x: screenWidth, duration: 0.3, ease: 'power3.in' }, '-=0.1');
  };

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-main-white shadow-sm z-50 py-4" role="navigation" aria-label={t('navbar.ariaLabels.mainNavigation')}>
      <div className="main-container mx-auto px-12">
        <div className="flex justify-between items-center h-[60px]">
          {/* Logo and Cakes Dropdown */}
          <div className="flex items-center space-x-6">
            <a 
              href="/" 
              className="flex flex-col items-center gap-1" 
              aria-label={t('navbar.ariaLabels.home')}
              title={t('navbar.ariaLabels.goToHomepage')}
            >
              <img
                src="/main_logo.png"
                alt={t('navbar.ariaLabels.logoAlt')}
                className="h-12 w-auto"
                width="auto"
                height="40"
                loading="eager"
              />
            </a>
            <CakesDropdown />
          </div>
          

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-6 2xl:space-x-8">
            <button
              onClick={() => scrollToSection('Contacts')}
              className="relative text-gray-800 hover:cursor-pointer font-medium text-sm tracking-wider uppercase transition-colors duration-200 group"
              aria-label={t('navbar.ariaLabels.viewContacts')}
              title={t('navbar.ariaLabels.getInTouch')}
              type="button"
            >
              {t('navbar.contacts')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-main-brown transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
            </button>
            <LanguageSwitcher />
            <a 
              href="tel:+37379426659" 
              className="bg-main-brown px-6 py-2 text-white font-medium text-sm tracking-wider transition duration-200 hover:bg-opacity-90"
              aria-label={t('navbar.ariaLabels.callUsAt')}
              title={t('navbar.ariaLabels.clickToCall')}
            >
              079426659
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:cursor-pointer transition-colors duration-200"
              aria-label={isMenuOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

                 {/* Full Screen Mobile Drawer */}
         <div
           ref={drawerRef}
           className="fixed inset-0 z-50 md:hidden"
           style={{ display: 'none' }}
           id="mobile-menu"
           role="menu"
           aria-label={t('navbar.ariaLabels.mobileNavigationLinks')}
         >
           {/* Drawer Content */}
           <div
             ref={contentRef}
             className="relative h-full w-full bg-main-white flex flex-col ml-auto shadow-2xl"
           >
             {/* Header */}
             <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
               <img
                 src="/main_logo.png"
                 alt={t('navbar.ariaLabels.logoAlt')}
                 className="h-8 w-auto"
                 width="auto"
                 height="32"
                 loading="lazy"
               />
               <button
                 onClick={() => setIsMenuOpen(false)}
                 className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                 aria-label={t('navbar.ariaLabels.closeMobileMenu')}
                 type="button"
               >
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                 </svg>
               </button>
             </div>

             {/* Navigation Links */}
             <div className="flex-1 px-6 py-8 overflow-y-auto">
               <nav className="space-y-6" role="menubar" aria-label={t('navbar.ariaLabels.mobileNavigationLinks')}>
                 {/* Fillings - matches desktop order 1 */}
                 <button
                   ref={el => navLinksRef.current[0] = el}
                   onClick={() => scrollToSection('Fillings')}
                   className="relative block w-full text-left text-2xl font-light text-gray-800 hover:text-amber-700 transition-colors duration-200 py-3 border-b border-gray-200 group"
                   aria-label={t('navbar.ariaLabels.viewFillings')}
                   type="button"
                   role="menuitem"
                 >
                   {t('navbar.fillings')}
                   <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-main-brown transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                 </button>
                 
                 {/* Birthday Cakes - matches desktop order 2 */}
                 <button
                   ref={el => navLinksRef.current[1] = el}
                   onClick={() => scrollToSection('BirthdayCakes')}
                   className="relative block w-full text-left text-2xl font-light text-gray-800 hover:text-amber-700 transition-colors duration-200 py-3 border-b border-gray-200 group"
                   aria-label={t('navbar.ariaLabels.viewBirthdayCakes')}
                   type="button"
                   role="menuitem"
                 >
                   {t('navbar.birthdayCakes')}
                   <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-main-brown transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                 </button>
                 
                 {/* Bento Cakes - matches desktop order 3 */}
                 <button
                   ref={el => navLinksRef.current[2] = el}
                   onClick={() => scrollToSection('BentoCakes')}
                   className="relative block w-full text-left text-2xl font-light text-gray-800 hover:text-amber-700 transition-colors duration-200 py-3 border-b border-gray-200 group"
                   aria-label={t('navbar.ariaLabels.viewBentoCakes')}
                   type="button"
                   role="menuitem"
                 >
                   {t('navbar.bentoCakes')}
                   <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-main-brown transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                 </button>
                 
                 {/* Wedding Cakes - matches desktop order 4 */}
                 <button
                   ref={el => navLinksRef.current[3] = el}
                   onClick={() => scrollToSection('WeddingsCakes')}
                   className="relative block w-full text-left text-2xl font-light text-gray-800 hover:text-amber-700 transition-colors duration-200 py-3 border-b border-gray-200 group"
                   aria-label={t('navbar.ariaLabels.viewWeddingCakes')}
                   type="button"
                   role="menuitem"
                 >
                   {t('navbar.weddingCakes')}
                   <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-main-brown transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                 </button>
                 
                 {/* Fillings */}
                 <button
                   ref={el => navLinksRef.current[4] = el}
                   onClick={() => scrollToSection('Fillings')}
                   className="relative block w-full text-left text-2xl font-light text-gray-800 hover:text-amber-700 transition-colors duration-200 py-3 border-b border-gray-200 group"
                   aria-label={t('navbar.ariaLabels.viewFillings')}
                   type="button"
                   role="menuitem"
                 >
                   {t('navbar.fillings')}
                   <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-main-brown transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                 </button>
                 
                 
                 {/* Contacts */}
                 <button
                   ref={el => navLinksRef.current[6] = el}
                   onClick={() => scrollToSection('Contacts')}
                   className="relative block w-full text-left text-2xl font-light text-gray-800 hover:text-amber-700 transition-colors duration-200 py-3 border-b border-gray-200 group"
                   aria-label={t('navbar.ariaLabels.viewContacts')}
                   type="button"
                   role="menuitem"
                 >
                   {t('navbar.contacts')}
                   <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-main-brown transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                 </button>
               </nav>
             </div>

                                     {/* Footer with Phone */}
            <div
              ref={el => navLinksRef.current[7] = el}
              className="px-6 py-6 border-t border-gray-200"
            >
               <a
                 href="tel:+3737857647"
                 className="flex items-center justify-center w-full text-center bg-main-brown text-white py-4 text-lg font-medium tracking-wider transition duration-200 hover:bg-opacity-90"
                 aria-label={t('navbar.ariaLabels.callUsAt')}
                 title={t('navbar.ariaLabels.callUsDirectly')}
               >
                 <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                 {t('navbar.callUs')}: 07857647
               </a>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
