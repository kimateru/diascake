import { memo, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CandybarCard from './CandybarCard';
import CandybarModal from './CandybarModal';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { candyBarMenuKeys } from '../data/candybar';

const Candybar = memo(() => {
  const { i18n, t } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  const items = useMemo(() => {
    // Build localized view-model from keys, similar to Fillings.jsx
    return candyBarMenuKeys.map((entry) => ({
      id: entry.id,
      image: entry.image,
      name: t(`candybar.items.${entry.key}.name`),
      description: t(`candybar.items.${entry.key}.description`),
      price: t(`candybar.items.${entry.key}.price`),
    }));
  }, [t, i18n.language]);

  return (
    <section className="py-16 bg-white" id="Candybar">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-start">
          {/* Left text column */}
          <div className="lg:col-span-1">
            <p className="uppercase tracking-widest text-sm text-gray-600 mb-4">{t('candybar.badge', 'Our summer menu')}</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              {t('candybar.title', "There's no sweetness quite like late summer.")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
              {t(
                'candybar.subtitle',
                'Meniul nostru sezonier evidențiază aromele vibrante ale ingredientelor de sezon. Bucură-te de selecția noastră ușoară și luminoasă.'
              )}
            </p>
          </div>

          {/* Right slider */}
          <div className="relative w-full lg:col-span-2">
            <Swiper
              modules={[Navigation, Scrollbar]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              scrollbar={{ hide: false, draggable: true, el: '.swiper-scrollbar-candy' }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="pb-16"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setTimeout(() => {
                  if (!swiperRef.current || swiperRef.current.destroyed) return;
                  swiperRef.current.params.navigation.prevEl = prevRef.current;
                  swiperRef.current.params.navigation.nextEl = nextRef.current;
                  swiperRef.current.navigation.init();
                  swiperRef.current.navigation.update();
                }, 0);
              }}
            >
              {items.map((item) => (
                <SwiperSlide key={item.id} className="lg:min-w-[410px]">
                  <CandybarCard item={item} onReadMore={(it) => setActiveItem(it)} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom nav + scrollbar */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                ref={prevRef}
                className="cursor-pointer flex items-center justify-center w-12 h-12 bg-white border-2 border-main-brown text-main-brown hover:bg-main-brown hover:text-white transition-all duration-200"
                aria-label={t('candybar.navigation.previous', 'Previous')}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="swiper-scrollbar-candy flex-1 max-w-xs h-2 bg-gray-200 rounded-full mx-4 relative">
                <div className="swiper-scrollbar-drag bg-main-brown rounded-full h-full transition-all duration-200"></div>
              </div>

              <button
                ref={nextRef}
                className="cursor-pointer flex items-center justify-center w-12 h-12 bg-white border-2 border-main-brown text-main-brown hover:bg-main-brown hover:text-white transition-all duration-200"
                aria-label={t('candybar.navigation.next', 'Next')}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for item details */}
      {activeItem && (
        <CandybarModal item={activeItem} onClose={() => setActiveItem(null)} />
      )}

    </section>
  );
});

Candybar.displayName = 'Candybar';

export default Candybar;
