import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cakeFillings } from '../data/cakes';
import RangePicker from './RangePicker';
import SectionHeader from './SectionHeader';

const Header = memo(() => {
  const { t } = useTranslation();
  const [selectedCake, setSelectedCake] = useState('');
  const [guestCount, setGuestCount] = useState(0.1);

  // Scroll to second section
  const scrollToSecondSection = () => {
    const secondSection = document.getElementById('cake-builder-section');
    if (secondSection) {
      secondSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* First Section - Hero with Create Cake Button */}
      <section
        className="relative bg-white py-24 pt-32"
        role="banner"
        aria-label={t('header.ariaLabels.heroSection')}
      >
        {/* Decorative background elements */}
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-left max-w-5xl">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide leading-tight text-main-brown">
                {t('header.title')}
              </h1>

              <p
                className="text-lg md:text-xl font-medium mt-8 leading-relaxed text-main-brown"
                role="text"
                aria-label={t('header.ariaLabels.missionStatement')}
              >
                {t('header.description')}
              </p>

              <div className="mt-12">
                <button
                  onClick={scrollToSecondSection}
                  className="inline-block bg-main-brown text-white px-8 py-4 text-lg font-medium tracking-wider uppercase transition-all duration-200 border border-main-brown transform hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:bg-main-brown hover:text-white"
                  aria-label={t('header.ariaLabels.exploreMenu')}
                >
                  {t('header.buildCake') || 'Build Your Cake'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Cake Builder with Fillings */}
      <section
        id="cake-builder-section"
        className="relative min-h-screen bg-main-brown py-16"
        role="main"
        aria-label="Cake Builder Section"
      >
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 gap-10 items-start">
            {/* Left text column */}
            <div className="lg:col-span-1" data-aos="fade-up">
              <SectionHeader
                textColor="text-white"
                badgeColor="text-white/80"
                subtitleColor="text-white/90"
                badge={t('fillings.badge')}
                title={t('fillings.title')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Half - Cake Fillings */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                  {t('header.chooseFilling') || 'Choose Your Filling'}
                </h3>
              </div>

              {/* Fillings Grid - Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cakeFillings.map((cake) => (
                  <button
                    key={cake.id}
                    onClick={() => setSelectedCake(cake.key)}
                    className={`p-0 border-2 transition-all duration-200 text-left flex items-center h-50 bg-white overflow-hidden ${selectedCake === cake.key
                      ? ' bg-white/90 text-main-brown shadow-lg'
                      : ' hover:border-white/60 text-main-brown bg-white hover:bg-white/85 cursor-pointer'
                      }`}
                  >
                    {/* Image */}
                    <div className="w-32 h-full flex-shrink-0 overflow-hidden">
                      <img
                        src={`/${cake.image}`}
                        alt={t(`fillings.cakes.${cake.key}.name`)}
                        className="w-full h-full object-cover"
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
                      </div>
                      <div className="text-main-brown font-semibold text-sm mt-auto">
                        {t(`fillings.cakes.${cake.key}.price`)}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Half - Range Picker or Selection Prompt */}
            <div className="space-y-8">
              {!selectedCake ? (
                /* Show selection prompt when no filling is selected */
                <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                  <div className="bg-white/10 p-12 border-2 border-dashed border-white/30 max-w-md">
                    <div className="space-y-4">
                      <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
                <>
                  <div className="text-center lg:text-left">
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

                  {/* Order Summary */}

                </>
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