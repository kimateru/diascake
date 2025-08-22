import { memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CTAButton from './CTAButton';
import SectionHeader from './SectionHeader';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { cakeFillings } from '../data/cakes';

const Fillings = memo(() => {
  const { t } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <section className="py-16 bg-main-brown text-white" id="Fillings">
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
              subtitle={t('fillings.subtitle')}
            />
          </div>
        </div>
      </div>



      {/* Swiper Container */}
      <div className="relative mt-10 main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          scrollbar={{
            hide: false,
            draggable: true,
            el: '.swiper-scrollbar-custom',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="pb-16"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // Ensure refs are in the DOM before wiring navigation
            setTimeout(() => {
              if (!swiperRef.current || swiperRef.current.destroyed) return;
              swiperRef.current.params.navigation.prevEl = prevRef.current;
              swiperRef.current.params.navigation.nextEl = nextRef.current;
              swiperRef.current.navigation.init();
              swiperRef.current.navigation.update();
            }, 0);
          }}
        >
          {cakeFillings.map((cake) => (
            <SwiperSlide key={cake.id}>
              <div className="bg-white transition-all duration-300 overflow-hidden group h-[490px] flex flex-col justify-between">
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={cake.image}
                    alt={t(`fillings.cakes.${cake.key}.name`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 min-h-[3.5rem]">
                    {t(`fillings.cakes.${cake.key}.name`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2 min-h-[3.75rem]">
                    {t(`fillings.cakes.${cake.key}.description`)}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-main-brown">
                      {t(`fillings.cakes.${cake.key}.price`)}
                    </span>
                    {window.innerWidth > 1024 && <CTAButton />}
                  </div>

                  {window.innerWidth < 1024 &&
                    <div className="mt-auto w-full flex justify-center">
                      <CTAButton className="w-full text-center" />
                    </div>
                  }
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            ref={prevRef}
            className="cursor-pointer flex items-center justify-center w-12 h-12 bg-white border-2 border-main-brown text-main-brown hover:bg-main-white/70 hover:text-black transition-all duration-200 shadow-md hover:shadow-lg"
            aria-label={t('fillings.navigation.previous')}
          >
            <ChevronLeft className="w-6 h-6 " />
          </button>

          {/* Custom Scrollbar */}
          <div className="swiper-scrollbar-custom flex-1 max-w-xs h-2 bg-gray-200 rounded-full mx-4 relative">
            <div className="swiper-scrollbar-drag bg-main-brown rounded-full h-full transition-all duration-200"></div>
          </div>

          <button
            ref={nextRef}
            className="cursor-pointer flex items-center justify-center w-12 h-12 bg-white border-2 border-main-brown text-main-brown hover:bg-main-white/70 hover:text-black transition-all duration-200 shadow-md hover:shadow-lg"
            aria-label={t('fillings.navigation.next')}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section >
  );
});

Fillings.displayName = 'Fillings';

export default Fillings;
