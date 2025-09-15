import React, { useState, useEffect, useRef } from 'react';
import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb
} from 'react-circular-input';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';

const RangePicker = ({ selectedCake, onGuestCountChange, guestCount: initialGuestCount }) => {
  const { t } = useTranslation();
  const [guestCount, setGuestCount] = useState(initialGuestCount || 0.1); // 0 - 1
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (onGuestCountChange) {
      onGuestCountChange(guestCount);
    }
  }, [guestCount, onGuestCountChange]);

  const min = 2;
  const max = 200;
  const scaledGuestCount = Math.round(min + guestCount * (max - min));

  const handleInputClick = () => {
    setIsEditing(true);
    setInputValue(scaledGuestCount.toString());
  };

  const handleInputChange = (e) => {
    if (/^\d*$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const handleInputSubmit = () => {
    const numValue = parseInt(inputValue);
    if (numValue >= 1 && numValue <= 200) {
      const normalizedValue = (numValue - min) / (max - min);
      setGuestCount(Math.max(0, Math.min(1, normalizedValue)));
    }
    setIsEditing(false);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleInputSubmit();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setInputValue('');
    }
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const radius = 120;
  const stepValues = [2, 24, 46, 68, 90, 112, 134, 156, 178, 200];

  const calculateRecommendedWeight = (guests) => {
    if (guests <= 9) return 2.0;
    if (guests <= 13) return 2.5;
    if (guests <= 20) return 3.0;
    if (guests <= 25) return 3.5;
    if (guests <= 30) return 4.0;
    if (guests <= 35) return 4.5;
    if (guests <= 40) return 5.0;
    if (guests <= 45) return 5.5;
    if (guests <= 50) return 6.0;
    if (guests <= 60) return 7.0;
    if (guests <= 70) return 8.0;
    if (guests <= 80) return 9.0;
    if (guests <= 90) return 10.0;
    if (guests <= 100) return 11.0;
    if (guests <= 120) return 13.0;
    if (guests <= 150) return 16.0;
    if (guests <= 180) return 18.0;
    return 20.0;
  };

  const calculatePrice = () => {
    if (!selectedCake) return 0;
    try {
      const cakeData = t(`fillings.cakes.${selectedCake}`, { returnObjects: true });
      if (!cakeData || !cakeData.price) return 0;
      const priceMatch = cakeData.price.match(/(\d+)/);
      if (!priceMatch) return 0;
      const pricePerKg = parseInt(priceMatch[1]);
      const recommendedWeight = calculateRecommendedWeight(scaledGuestCount);
      return pricePerKg * recommendedWeight;
    } catch (error) {
      console.error('Error calculating price:', error);
      return 0;
    }
  };

  const recommendedWeight = calculateRecommendedWeight(scaledGuestCount);
  const totalPrice = calculatePrice();

  return (
    <div className="range-picker-mobile flex flex-col items-center justify-center min-h-[350px] sm:min-h-[400px] pb-4">
      <div className="w-full max-w-md mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl font-semibold text-main-brown py-4 text-center">
          {t('fillings.guestCount') || 'Number of Guests'}
        </h3>

        <div className="flex flex-col items-center justify-center">
          {/* Container to layer image + circular input */}
          <div 
            className="relative" 
            style={{ width: 190, height: 190, touchAction: 'none' }}
            onTouchStart={(e) => e.preventDefault()}
            onTouchMove={(e) => e.preventDefault()}
          >
            {selectedCake && (
              <div className="absolute inset-2.5 rounded-full overflow-hidden z-50 pointer-events-none">
                <OptimizedImage
                  src={`/${selectedCake === 'plombirCapsuni' ? 'plombir-min_tqjeph' :
                    selectedCake === 'snikers' ? 'snikers-min_ahh7ab' :
                      selectedCake === 'mangoMaracuia' ? 'mango-min_okctnu' :
                        selectedCake === 'oreo' ? 'oreo-min_wekoom' :
                          selectedCake === 'padureaNeagra' ? 'padure-min_bqhvsg' :
                            selectedCake === 'redVelvetZmeura' ? 'velvet-min_puiyvv' :
                              selectedCake === 'medovic' ? 'medovic-min_ohkkqa' :
                                selectedCake === 'napoleon' ? 'napoleon-min_lmc5vt' :
                                  selectedCake === 'fisticZmeura' ? 'fistic-min_ordqfz' :
                                    'plombir-min_tqjeph'
                    }`}
                  alt={t(`fillings.cakes.${selectedCake}.name`)}
                  className="w-full h-full object-cover brightness-50"
                  style={{ objectPosition: 'center center' }}
                />
              </div>

            )}

            {/* Circular Input overlays on top */}
            <CircularInput
              value={guestCount}
              onChange={setGuestCount}
              radius={radius}
              className="relative z-30"
              style={{ touchAction: 'none' }}
            >
              <CircularTrack stroke="#ddd" strokeWidth={8} />
              <CircularProgress stroke="#6b4226" strokeWidth={8} />
              <CircularThumb fill="#6b4226" r={12} />

              {/* Clickable inner circle */}
              <circle
                cx="50%"
                cy="50%"
                r="60"
                fill="transparent"
                style={{ cursor: 'pointer' }}
                onClick={handleInputClick}
              />


              {/* Step marks */}
              {stepValues.map((step) => {
                if (step === 2 || step === 200) return null;
                const t = (step - min) / (max - min);
                const angle = 2 * Math.PI * t - Math.PI / 2;
                const rOuter = radius;
                const rInner = radius - 12;
                const x1 = rOuter * Math.cos(angle) + radius;
                const y1 = rOuter * Math.sin(angle) + radius;
                const x2 = rInner * Math.cos(angle) + radius;
                const y2 = rInner * Math.sin(angle) + radius;
                const rLabel = radius + 20;
                const lx = rLabel * Math.cos(angle) + radius;
                const ly = rLabel * Math.sin(angle) + radius;

                return (
                  <g key={step}>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6b4226" strokeWidth={2} />
                    <text
                      x={lx}
                      y={ly}
                      textAnchor="middle"
                      alignmentBaseline="middle"
                      fontSize="12"
                      fill="#6b4226"
                      fontWeight="500"
                    >
                      {step}
                    </text>
                  </g>
                );
              })}

              {/* Special 200/2 at top */}
              <g>
                <line x1={radius} y1={0} x2={radius} y2={12} stroke="#6b4226" strokeWidth={2} />
                <text
                  x={radius}
                  y={-19}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fontSize="14"
                  fill="#6b4226"
                  fontWeight="600"
                >
                  200/2
                </text>
              </g>
            </CircularInput>

            {/* Text overlay - positioned after image in DOM order */}
            {isEditing ? (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 100 }}>
                <div className="flex flex-col items-center">
                  <div className="text-white text-xs font-medium mb-1">
                    Type here the value
                  </div>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputSubmit}
                    onKeyPress={handleInputKeyPress}
                    className="w-16 h-8 text-center text-xl font-bold text-white bg-transparent border-none outline-none pointer-events-auto focus:outline-none focus:ring-0 focus:border-none"
                    style={{ fontSize: '20px', boxShadow: 'none' }}
                    placeholder="1-200"
                  />
                </div>
              </div>
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-auto cursor-pointer"
                style={{ zIndex: 100 }}
                onClick={handleInputClick}
              >
                <div className="text-white text-2xl font-bold flex items-center gap-2">
                  <img src="group.png" alt="group icon" className='w-10 h-10 filter brightness-0 invert' />
                  <span>
                    {scaledGuestCount}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedCake && (
        <div className="w-full max-w-md">
          <div className="order-summary bg-main-brown/10 p-2 border border-main-brown/20">
            <h3 className="text-base sm:text-lg font-semibold text-main-brown mb-3 sm:mb-4">
              {t('fillings.orderSummary') || 'Order Summary'}
            </h3>
            <div className="space-y-3 text-main-brown">
              <div className="flex justify-between">
                <span className="font-semibold">{t(`fillings.cakes.${selectedCake}.name`)}:</span>
                <span>{t(`fillings.cakes.${selectedCake}.price`)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">{t('fillings.guestCount') || 'Guests'}:</span>
                <span>{scaledGuestCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">{t('fillings.recommendedWeight') || 'Recommended Weight'}:</span>
                <span>{recommendedWeight} kg</span>
              </div>
              <hr className="border-main-brown/20" />
              <div className="flex justify-between font-semibold text-main-brown">
                <span>{t('fillings.totalPrice') || 'Total Price'}:</span>
                <span>{totalPrice.toFixed(0)} {t('fillings.currency') || 'lei'}</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="tel:+37379426659"
              className="cta-button inline-block bg-main-brown text-white px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-200 border border-main-brown transform hover:-translate-y-0.5 cursor-pointer hover:bg-main-brown/80"
            >
              {t('header.orderNow') || 'Order Now'}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default RangePicker;
