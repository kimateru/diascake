import { memo, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { cakeFillings } from '../data/cakes';
import RangePicker from './RangePicker';

const Header = memo(() => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [displayStep, setDisplayStep] = useState(0); // What's currently being displayed
  const [selectedCake, setSelectedCake] = useState('');
  const [guestCount, setGuestCount] = useState(0.1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const headerRef = useRef(null);
  const activeStepRef = useRef(null);



  // Two-phase slide transition animation
  const animateStepTransition = (direction, targetStep) => {
    if (!activeStepRef.current || isTransitioning) return;
    
    setIsTransitioning(true);
    const tl = gsap.timeline({
      onComplete: () => setIsTransitioning(false)
    });

    if (direction === 'next') {
      // Phase 1: Slide current content out to left
      tl.to(activeStepRef.current, {
        x: '-100%',
        duration: 0.4,
        ease: 'power2.inOut'
      })
      // Phase 2: Change content and slide in from right
      .call(() => setDisplayStep(targetStep))
      .set(activeStepRef.current, { x: '100%' })
      .to(activeStepRef.current, {
        x: '0%',
        duration: 0.4,
        ease: 'power2.inOut'
      });
    } else if (direction === 'prev') {
      // Phase 1: Slide current content out to right
      tl.to(activeStepRef.current, {
        x: '100%',
        duration: 0.4,
        ease: 'power2.inOut'
      })
      // Phase 2: Change content and slide in from left
      .call(() => setDisplayStep(targetStep))
      .set(activeStepRef.current, { x: '-100%' })
      .to(activeStepRef.current, {
        x: '0%',
        duration: 0.4,
        ease: 'power2.inOut'
      });
    }
  };

  const goToStep = (step) => {
    if (step === currentStep || isTransitioning) return;
    
    const direction = step > currentStep ? 'next' : 'prev';
    animateStepTransition(direction, step);
    setCurrentStep(step);
  };

  const goBack = () => {
    if (currentStep > 0 && !isTransitioning) {
      const targetStep = currentStep - 1;
      animateStepTransition('prev', targetStep);
      setCurrentStep(targetStep);
    }
  };

  const goNext = () => {
    if (currentStep < 2 && !isTransitioning) {
      const targetStep = currentStep + 1;
      animateStepTransition('next', targetStep);
      setCurrentStep(targetStep);
    }
  };



  // Initialize GSAP
  useEffect(() => {
    // Set initial position for the active step container
    if (activeStepRef.current) {
      gsap.set(activeStepRef.current, { x: '0%' });
    }
  }, []);

  // Render step content based on display step
  const renderStepContent = () => {
    switch (displayStep) {
              case 0:
        return (
          <div className="step-content flex flex-col lg:flex-row h-full">
            {/* Text Content */}
            <div className="flex-1 flex items-center">
              <div className="main-container w-full px-4 sm:px-6 lg:px-8 xl:px-12 mt-[70px]">
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
                      <button
                        onClick={goNext}
                        className="inline-block bg-white text-gray-900 px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-200 border border-main-brown transform hover:-translate-y-0.5 cursor-pointer hover:bg-main-brown hover:text-white"
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
            <div className="lg:hidden flex-shrink-0 px-4 pb-8">
              <div className="flex justify-center items-center space-x-4 mt-8">
                <div className="relative">
                  <img 
                    src="/header/header1.svg" 
                    alt="Header decoration 1" 
                    className="w-32 h-32 md:w-40 md:h-40 object-contain opacity-80"
                  />
                </div>
                <div className="relative">
                  <img 
                    src="/header/header2.svg" 
                    alt="Header decoration 2" 
                    className="w-32 h-32 md:w-40 md:h-40 object-contain opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <>
                         {/* Mobile Layout */}
             <div className="step-content md:hidden h-full bg-main-white overflow-y-auto">
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
              
              <div className="main-container w-full px-4">
                <div className="py-6">
                  {/* Mobile title */}
                  <h2 className="text-2xl font-semibold text-main-brown text-center mb-6 mt-[100px]">
                    {t('header.chooseFilling') || 'Choose Your Filling'}
                  </h2>
                  
                  {/* Mobile grid - single column */}
                  <div className="space-y-4">
                    {cakeFillings.map((cake) => (
                      <button
                        key={cake.id}
                        onClick={() => {
                          setSelectedCake(cake.key);
                          goNext();
                        }}
                        className={`w-full h-[160px] p-0 rounded-lg border-2 transition-all duration-200 text-left flex overflow-hidden ${
                          selectedCake === cake.key
                            ? 'border-main-brown bg-main-brown/10 text-main-brown'
                            : 'border-main-brown/20 hover:border-main-brown/50 text-main-brown bg-white hover:bg-main-brown/5'
                        }`}
                      >
                        {/* Mobile text content */}
                        <div className="w-2/3 p-3 flex flex-col justify-center">
                          <div className="font-medium text-base leading-tight">
                            {t(`fillings.cakes.${cake.key}.name`)}
                          </div>
                          <div className="text-xs opacity-80 mt-1">
                            {t(`fillings.cakes.${cake.key}.description`)}
                          </div>
                          <div className="text-main-brown font-semibold text-sm mt-1">
                            {t(`fillings.cakes.${cake.key}.price`)}
                          </div>
                        </div>
                        
                        {/* Mobile image */}
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

              case 2:
          return (
           <>
             {/* Mobile Layout */}
             <div className="step-content md:hidden h-full bg-white flex flex-col overflow-y-auto mt-15">
               <div className="">
                 <div className="main-container w-full px-4 py-6">
                   <div className="text-center space-y-6">
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

      default:
        return null;
    }
  };

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
      {displayStep === 0 && (
        <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 pointer-events-none">
          <div className="relative w-full h-full">
            <img 
              src="/header/header1.svg" 
              alt="Header decoration 1" 
              className="absolute top-1/4 right-1/4 w-64 h-64 object-contain opacity-80"
            />
            <img 
              src="/header/header2.svg" 
              alt="Header decoration 2" 
              className="absolute bottom-1/4 right-1/3 w-64 h-64 object-contain opacity-80"
            />
          </div>
        </div>
      )}
      
      {/* Active Step Container - Stack Approach */}
      <div 
        ref={activeStepRef}
        className="flex-1 relative z-10 min-h-0 h-full"
      >
        {renderStepContent()}
      </div>


      {/* Navigation buttons - Normal flow, not fixed */}
      <div className="navigation-container relative z-20 py-4 bg-white border-t border-main-brown/10">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center space-x-2 sm:space-x-4 justify-center">
            {/* Previous button */}
            <button
              onClick={goBack}
              disabled={currentStep === 0 || isTransitioning}
              className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 border border-main-brown cursor-pointer ${
                currentStep === 0 || isTransitioning
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
              disabled={currentStep === 2 || isTransitioning}
              className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 border border-main-brown cursor-pointer ${
                currentStep === 2 || isTransitioning
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
