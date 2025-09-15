import { memo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { cakeFillings } from '../data/cakes';
import RangePicker from './RangePicker';
import SectionHeader from './SectionHeader';
import OptimizedImage from './OptimizedImage';
import CTAButton from './CTAButton';

const Header = memo(() => {
  const { t } = useTranslation();
  const [selectedCake, setSelectedCake] = useState('');
  const [guestCount, setGuestCount] = useState(0.1);

  // Scroll to constructor section
  const scrollToConstructor = () => {
    const constructorSection = document.getElementById('cake-builder-section');
    if (constructorSection) {
      constructorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to range picker when cake is selected
  const scrollToRangePicker = () => {
    // Target the range picker section
    const rangePickerSection = document.querySelector('.range-picker-mobile');
    if (rangePickerSection) {
      rangePickerSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      // Fallback: scroll to the entire cake builder section
      const cakeBuilderSection = document.getElementById('cake-builder-section');
      if (cakeBuilderSection) {
        cakeBuilderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Handle cake selection
  const handleCakeSelection = (cakeKey) => {
    setSelectedCake(cakeKey);
    // Scroll to range picker on mobile after a short delay
    setTimeout(() => {
      scrollToRangePicker();
    }, 100);
  };

  return (
    <div className="relative">
      {/* Cake Builder Section with Welcome Text */}
      <section
        id="cake-builder-section"
        className="relative min-h-screen bg-main-brown py-32"
        role="main"
        aria-label="Cake Builder Section"
      >
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Welcome Text Section */}
          <div className="text-left mb-16" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide leading-tight text-white mb-8">
              {t('header.title')}
            </h1>

            <p
              className="text-lg md:text-xl font-medium leading-relaxed text-white/90 max-w-4xl"
              role="text"
              aria-label={t('header.ariaLabels.missionStatement')}
            >
              {t('header.description')}
            </p>
            <CTAButton className="bg-white! text-main-brown! mt-8" />
          </div>

          {/* Constructor Section */}
          <div className="space-y-12">
            {/* Section Header */}
            <div className="text-left" data-aos="fade-up">
              <SectionHeader
                textColor="text-white"
                badgeColor="text-white"
                subtitleColor="text-white/90"
                alignment="text-left"
                badge={t('fillings.badge')}
                title={t('fillings.title')}
              />
            </div>

            {/* Cards Row */}
            <div className="space-y-8">
              <div className="text-left">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-6">
                  {t('header.chooseFilling') || 'Choose Your Filling'}
                </h3>
              </div>

              {/* Fillings Grid - Cards in Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-3 gap-2 ">
                {cakeFillings.map((cake) => (
                  <button
                    key={cake.id}
                    onClick={() => handleCakeSelection(cake.key)}
                    className={`p-0 border-2 transition-all duration-200 text-left flex items-center ${cake.id === 7 ? 'lg:col-span-2 lg:row-span-2 h-auto!' : 'h-50'} bg-white overflow-hidden ${selectedCake === cake.key
                      ? ' bg-white/90 text-main-brown shadow-lg'
                      : ' hover:border-white/60 text-main-brown bg-white hover:bg-white/85 cursor-pointer'
                      }`}
                  >
                    {/* Image */}
                    <div className={`h-full flex-shrink-0 overflow-hidden ${cake.id === 7 ? 'w-32 md:w-1/2' : 'w-32'}`}>
                      <OptimizedImage
                        src={`/${cake.image}`}
                        alt={t(`fillings.cakes.${cake.key}.name`)}
                        className="w-full h-full object-cover"
                        priority={cake.id <= 4} // First 4 images get priority
                      />
                    </div>

                    {/* Text content */}
                    <div className="flex-1 min-w-0 h-full flex flex-col justify-between p-3">
                      <div className="space-y-2">
                        <div className="font-medium text-base leading-tight">
                          {t(`fillings.cakes.${cake.key}.name`)}
                        </div>
                        <div className="text-xs text-gray-600 leading-tight">
                          {t(`fillings.cakes.${cake.key}.description`)}
                        </div>
                        {cake.id === 7 && (
                          <div className="space-y-3 mt-4">
                            {/* Most Popular Badge */}
                            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-3 py-1.5 text-sm font-bold shadow-sm">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              {t('fillings.badges.mostPopular')}
                            </div>
                            {/* Feature Icons */}
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <div className="flex items-center space-x-1.5 bg-gray-100 px-2 py-1">
                                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs font-medium text-gray-700">{t('fillings.badges.customerFavorite')}</span>
                              </div>
                              <div className="items-center space-x-1.5 bg-gray-100 px-2 py-1 hidden md:flex">
                                <svg className="w-4 h-4 text-main-brown" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs font-medium text-gray-700">{t('fillings.badges.veryTasty')}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="text-main-brown font-semibold text-sm mt-auto">
                        {t(`fillings.cakes.${cake.key}.price`)}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Calculator Logic Below Cards */}
            <div className="flex justify-center">
              {!selectedCake ? (
                /* Show selection prompt when no filling is selected */
                <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                  <div className="bg-white/10 p-12 border-2 border-dashed border-white/30 max-w-md">
                    <div className="space-y-4">
                      <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        {t('header.selectFillingFirst')}
                      </h3>
                      <p className="text-white/80">
                        {t('header.selectFillingDescription')}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /* Show range picker and order summary when filling is selected */
                <div className="w-full">
                  <div>
                    <div className="text-center mb-6">
                      <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                        {t('header.guestCount') || 'How Many Guests?'}
                      </h3>
                    </div>

                    {/* Range Picker Container */}
                    <div className="bg-white">
                      <RangePicker
                        selectedCake={selectedCake}
                        onGuestCountChange={setGuestCount}
                        guestCount={guestCount}
                      />
                    </div>
                  </div>

                  {/* Order Summary */}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

Header.displayName = 'Header';

export default Header;