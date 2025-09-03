import { memo, useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { cakeFillings } from '../data/cakes';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RangePicker from './RangePicker';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Header = memo(() => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCake, setSelectedCake] = useState('');
  const [guestCount, setGuestCount] = useState(0.1);
  const [fillingsSlide, setFillingsSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile-first
  
  const headerRef = useRef(null);
  const swiperRef = useRef(null);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update Swiper allowTouchMove when mobile state changes
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.allowTouchMove = isMobile;
    }
  }, [isMobile]);

  // Swiper event handlers
  const handleSlideChange = (swiper) => {
    setCurrentStep(swiper.activeIndex);
  };

  // Navigation functions for desktop buttons
  const goNext = () => {
    if (swiperRef.current && currentStep < 2) {
      swiperRef.current.slideNext();
    }
  };

  const goBack = () => {
    if (swiperRef.current && currentStep > 0) {
      swiperRef.current.slidePrev();
    }
  };

  // Step 1 Content
  const renderStep1 = () => (
    <div className="step-content flex flex-col lg:flex-row h-full">
      {/* Text Content */}
      <div className="flex-1 flex items-center">
        <div className="main-container w-full px-4 sm:px-6 lg:px-8 xl:px-12 mt-[70px]">
          <div className="text-left max-w-3xl">
            <div className="space-y-6">
              <h1 className="text-[42px] md:text-7xl font-semibold tracking-wide leading-tight">
              {t('header.title')}
              </h1>
              
              <p 
                className="text-md md:text-xl font-medium max-w-3xl mt-8 leading-relaxed"
                role="text"
                aria-label={t('header.ariaLabels.missionStatement')}
              >
                {t('header.description')}
              </p>
              
              <div className="mt-10">
                <button
                  onClick={goNext}
                  className="inline-block bg-main-brown text-white px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-200 border border-main-brown transform hover:-translate-y-0.5 cursor-pointer hover:bg-main-brown hover:text-white"
                  aria-label={t('header.ariaLabels.exploreMenu')}
                >
                  {t('header.buildCake') || 'Build Your Cake'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile decorative images */}
      <div className="md:hidden flex-shrink-0 px-4 pb-8">
        <div className="flex justify-center items-center space-x-4 mt-8">
          <div className="relative">
            <img 
              src="/header/header1.svg" 
              alt="Header decoration 1" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain opacity-80 relative -top-[5px] md:static"
            />
          </div>
          <div className="relative">
            <img 
              src="/header/header2.svg" 
              alt="Header decoration 2" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain opacity-80 relative -top-13 md:static"
            />
          </div>
        </div>
      </div>

    </div>
  );

  // Step 2 Content
  const renderStep2 = () => (
    <>
      {/* Mobile Layout */}
      <div className="step-content md:hidden h-full bg-main-white relative w-full">
        {/* Decorative SVG elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <svg className="absolute top-0 right-0 w-96 h-96 text-main-brown/10" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="80" cy="20" r="15" />
            <circle cx="90" cy="40" r="8" />
            <circle cx="70" cy="60" r="12" />
          </svg>
          <svg className="absolute bottom-0 left-0 w-64 h-64 text-main-brown/5" fill="currentColor" viewBox="0 0 100 100">
            <path d="M20 80 Q40 60 60 80 T100 80" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M10 90 Q30 70 50 90 T90 90" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="flex flex-col h-full justify-center items-center px-4">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-main-brown text-center mb-6">
            {t('header.chooseFilling') || 'Choose Your Filling'}
          </h2>

          {/* Inner Slider Container */}
          <div className="w-full max-w-sm">
            {/* Current slide content - 2 rows of 2 items */}
            <div className="grid grid-cols-1 gap-3 px-2">
              {(() => {
                const itemsPerSlide = 4;
                const startIndex = fillingsSlide * itemsPerSlide;
                const currentSlideItems = cakeFillings.slice(startIndex, startIndex + itemsPerSlide);
                
                // Split into 2 rows of 2 items each
                const firstRow = currentSlideItems.slice(0, 2);
                const secondRow = currentSlideItems.slice(2, 4);
                
                return (
                  <>
                    {/* First row */}
                    <div className="grid grid-cols-2 gap-2">
                      {firstRow.map((cake) => (
                        <button
                          key={cake.id}
                          onClick={() => {
                            setSelectedCake(cake.key);
                            goNext();
                          }}
                          className={`h-[250px] p-0 rounded-lg border-2 transition-all duration-200 text-left flex flex-col overflow-hidden ${selectedCake === cake.key
                              ? 'border-main-brown bg-main-brown/10 text-main-brown'
                              : 'border-main-brown/20 hover:border-main-brown/50 text-main-brown bg-white hover:bg-main-brown/5'
                            }`}
                        >
                          {/* Image on top */}
                          <div className="h-2/3 w-full">
                            <img
                              src={`/${cake.image}`}
                              alt={t(`fillings.cakes.${cake.key}.name`)}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Text content below */}
                          <div className="h-1/3 p-2 flex flex-col justify-center">
                            <div className="font-medium text-xs leading-tight">
                              {t(`fillings.cakes.${cake.key}.name`)}
                            </div>
                            <div className="text-main-brown font-semibold text-xs mt-1">
                              {t(`fillings.cakes.${cake.key}.price`)}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    {/* Second row */}
                    {secondRow.length > 0 && (
                      <div className="grid grid-cols-2 gap-2">
                        {secondRow.map((cake) => (
                          <button
                            key={cake.id}
                            onClick={() => {
                              setSelectedCake(cake.key);
                              goNext();
                            }}
                            className={`h-[250px] p-0 rounded-lg border-2 transition-all duration-200 text-left flex flex-col overflow-hidden ${selectedCake === cake.key
                                ? 'border-main-brown bg-main-brown/10 text-main-brown'
                                : 'border-main-brown/20 hover:border-main-brown/50 text-main-brown bg-white hover:bg-main-brown/5'
                              }`}
                          >
                            {/* Image on top */}
                            <div className="h-2/3 w-full">
                              <img
                                src={`/${cake.image}`}
                                alt={t(`fillings.cakes.${cake.key}.name`)}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {/* Text content below */}
                            <div className="h-1/3 p-2 flex flex-col justify-center">
                              <div className="font-medium text-xs leading-tight">
                                {t(`fillings.cakes.${cake.key}.name`)}
                              </div>
                              <div className="text-main-brown font-semibold text-xs mt-1">
                                {t(`fillings.cakes.${cake.key}.price`)}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
            
          {/* Inner navigation buttons */}
          <div className="flex justify-center items-center mt-6 space-x-4">
              <button
                onClick={() => setFillingsSlide(Math.max(0, fillingsSlide - 1))}
                disabled={fillingsSlide === 0}
                className={`px-7 py-2 text-sm border border-main-brown rounded transition-all duration-200 ${
                  fillingsSlide === 0
                    ? 'opacity-50 cursor-not-allowed text-main-brown/50 bg-white'
                    : 'text-main-brown bg-white hover:bg-main-brown hover:text-white'
                }`}
              >
                <ChevronLeft className='w-4 h-4'/>
              </button>
              
              {/* Slide indicator */}
              <div className="flex space-x-1">
                {Array.from({ length: Math.ceil(cakeFillings.length / 4) }, (_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === fillingsSlide ? 'bg-main-brown' : 'bg-main-brown/30'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setFillingsSlide(Math.min(Math.ceil(cakeFillings.length / 4) - 1, fillingsSlide + 1))}
                disabled={fillingsSlide >= Math.ceil(cakeFillings.length / 4) - 1}
                className={`px-7 py-2 text-sm border border-main-brown rounded transition-all duration-200 ${
                  fillingsSlide >= Math.ceil(cakeFillings.length / 4) - 1
                    ? 'opacity-50 cursor-not-allowed text-main-brown/50 bg-white'
                    : 'text-main-brown bg-white hover:bg-main-brown hover:text-white'
                }`}
              >
                <ChevronRight className='w-4 h-4'/>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="step-content hidden md:flex items-center justify-center h-full bg-main-white">
        {/* Decorative SVG elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <svg className="absolute top-0 right-0 w-96 h-96 text-main-brown/10" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="80" cy="20" r="15" />
            <circle cx="90" cy="40" r="8" />
            <circle cx="70" cy="60" r="12" />
          </svg>
          <svg className="absolute bottom-0 left-0 w-64 h-64 text-main-brown/5" fill="currentColor" viewBox="0 0 100 100">
            <path d="M20 80 Q40 60 60 80 T100 80" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M10 90 Q30 70 50 90 T90 90" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>
        
        <div className="main-container w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-6xl mx-auto">
            <div className="space-y-8">
              {/* Desktop title */}
              <h2 className="text-3xl lg:text-4xl font-semibold text-main-brown">
                {t('header.chooseFilling') || 'Choose Your Filling'}
              </h2>
              
              {/* Desktop grid - 3 columns */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {cakeFillings.map((cake) => (
                  <button
                    key={cake.id}
                    onClick={() => {
                      setSelectedCake(cake.key);
                      goNext();
                    }}
                    className={`w-full max-w-md h-[170px] p-0 rounded-lg border-2 transition-all duration-200 text-left flex overflow-hidden ${
                      selectedCake === cake.key
                        ? 'border-main-brown bg-main-brown/10 text-main-brown'
                        : 'border-main-brown/20 hover:border-main-brown/50 text-main-brown bg-white hover:bg-main-brown/5'
                    }`}
                  >
                    {/* Desktop text content */}
                    <div className="w-2/3 p-3 flex flex-col justify-center">
                      <div className="font-medium text-base leading-tight">
                        {t(`fillings.cakes.${cake.key}.name`)}
                      </div>
                      <div className="text-xs opacity-80 mt-1 line-clamp-2">
                        {t(`fillings.cakes.${cake.key}.description`)}
                      </div>
                      <div className="text-main-brown font-semibold text-sm mt-1">
                        {t(`fillings.cakes.${cake.key}.price`)}
                      </div>
                    </div>
                    
                    {/* Desktop image */}
                    <div className="w-1/3 h-full">
                      <img 
                        src={`/${cake.image}`}
                        alt={t(`fillings.cakes.${cake.key}.name`)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Step 3 Content
  const renderStep3 = () => (
    <>
      {/* Mobile Layout */}
      <div className="step-content md:hidden h-full bg-white flex flex-col justify-center">
        <div className="flex-1 flex items-center justify-center">
          <div className="main-container w-full px-4 py-6 z-[200]">
            <div className="text-center space-y-6 small-container-se">
              <h2 className="text-xl sm:text-2xl font-semibold text-main-brown">
                {t('header.guestCount') || 'How Many Guests?'}
              </h2>
              
              <div className="bg-main-white rounded-lg w-full">
                <RangePicker 
                  selectedCake={selectedCake}
                  onGuestCountChange={setGuestCount}
                  guestCount={guestCount}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="step-content hidden md:flex items-center justify-center h-full bg-white">
        <div className="main-container w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center w-full max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="mt-[100px]">
                <h2 className="text-3xl md:text-4xl font-semibold text-main-brown">
                  {t('header.guestCount') || 'How Many Guests?'}
                </h2>
              </div>
              
              <div className="bg-main-white rounded-lg w-full">
                <RangePicker 
                  selectedCake={selectedCake}
                  onGuestCountChange={setGuestCount}
                  guestCount={guestCount}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <header 
      ref={headerRef}
      className="relative h-screen md:h-[90dvh] flex flex-col text-main-brown overflow-hidden"
      role="banner"
      aria-label={t('header.ariaLabels.heroSection')}
    >
      {/* Background - White with decorative elements */}
      <div className="absolute inset-0 bg-white" aria-hidden="true">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large decorative circles */}
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-main-brown/5"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-main-brown/8"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-main-brown/6"></div>
          
          {/* Decorative lines */}
          <svg className="absolute top-0 right-0 w-96 h-96 text-main-brown/4" fill="none" viewBox="0 0 400 400">
            <path d="M0 200 Q200 100 400 200" stroke="currentColor" strokeWidth="2" />
            <path d="M0 250 Q200 150 400 250" stroke="currentColor" strokeWidth="1" />
            <path d="M0 300 Q200 200 400 300" stroke="currentColor" strokeWidth="1" />
          </svg>
          
          {/* Small dots pattern */}
          <div className="absolute bottom-1/4 right-1/3">
            <div className="grid grid-cols-3 gap-3 opacity-20">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-main-brown"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative images - responsive positioning (only show on desktop for step 1) */}
      {currentStep === 0 && (
        <div className="hidden md:block absolute right-0 top-10 h-full w-full pointer-events-none">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src="/header/header1.svg" 
              alt="Header decoration 1" 
              className="absolute bottom-13 lg:bottom-1/4 right-1/4 w-52 h-52 object-contain"
            />
            <img 
              src="/header/header2.svg" 
              alt="Header decoration 2" 
              className="absolute top-1/17 left-1/3 w-52 h-52 object-contain"
            />
          </div>
        </div>
      )}
      
      {/* Swiper Container */}
      <div className="flex-1 relative z-10">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          allowTouchMove={isMobile}
          touchRatio={1}
          touchAngle={45}
          threshold={50}
          className="h-full"
        >
          <SwiperSlide className="flex flex-col">
            {renderStep1()}
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            {renderStep2()}
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            {renderStep3()}
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Navigation buttons - Desktop only */}
      <div className="navigation-container hidden md:block relative z-20 py-4 bg-white border-t border-main-brown/10">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center space-x-2 sm:space-x-4 justify-center">
            {/* Previous button */}
            <button
              onClick={goBack}
              disabled={currentStep === 0}
              className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 border border-main-brown cursor-pointer ${
                currentStep === 0
                  ? 'opacity-50 cursor-not-allowed text-main-brown/50 bg-white'
                  : 'text-main-brown bg-white hover:bg-main-brown hover:text-white'
              }`}
              aria-label="Previous step"
            >
              <span className="sm:inline">← {t('header.previous') || 'Previous'}</span>
            </button>

            {/* Step indicator */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-main-brown text-xs sm:text-sm font-medium">
                {currentStep + 1} / 3
              </span>
            </div>

            {/* Next button */}
            <button
              onClick={goNext}
              disabled={currentStep === 2}
              className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 border border-main-brown cursor-pointer ${
                currentStep === 2
                  ? 'opacity-50 cursor-not-allowed text-main-brown/50 bg-white'
                  : 'text-main-brown bg-white hover:bg-main-brown hover:text-white'
              }`}
              aria-label="Next step"
            >
              <span className="sm:inline">{t('header.next') || 'Next'} →</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;