import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import CTAButton from './CTAButton';
import SectionHeader from './SectionHeader';
import OptimizedImage from './OptimizedImage';
import OptimizedVideo from './OptimizedVideo';

const BentoCakes = memo(() => {
  const { t } = useTranslation();

  const bentoGallery = [
    { id: 1, src: 'bento1_ewpobw', type: 'image', category: 'classic', size: 'large' },
    { id: 2, src: 'bento8_optimized_rlkqt7', type: 'video', category: 'birthday', size: 'medium' },
    { id: 3, src: 'bento7_optimized_njvvhz', type: 'video', category: 'fruit', size: 'medium' },
    { id: 4, src: 'bento5_hdwekm', type: 'image', category: 'elegant', size: 'medium' },
    { id: 5, src: 'bento4_y0ahpw', type: 'image', category: 'colorful', size: 'medium' },
  ];

  const MediaItem = ({ src, type, alt, className, priority = false }) =>
    type === 'video' ? (
      <OptimizedVideo src={src} className={className} />
    ) : (
      <OptimizedImage src={src} alt={alt} className={className} priority={priority} />
    );

  return (
    <section className="py-12 bg-main-white" id="BentoCakes">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
          <div className="flex flex-col" data-aos="fade-right">
            <div className="mb-8">
              <SectionHeader
                badge={t('bentoCakes.badge')}
                title={t('bentoCakes.title')}
                subtitle={t('bentoCakes.subtitle')}
              />
              <p className="text-base text-gray-700 max-w-2xl leading-relaxed mt-4">
                {t('bentoCakes.description')}
              </p>
              <div className="font-semibold text-lg text-gray-900 max-w-2xl leading-relaxed mt-4">
                <p>{t('bentoCakes.priceOne')}</p>
                <p>{t('bentoCakes.priceTwo')}</p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-8 flex justify-start">
              <CTAButton className="bg-main-brown! text-white hover:bg-white! hover:text-main-brown!" />
            </div>
          </div>

          <div className="h-full" data-aos="fade-left">
            {/* Desktop */}
            <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-3 h-[600px]">
              {bentoGallery.slice(0, 6).map(cake => (
                <div
                  key={cake.id}
                  className={`group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    cake.size === 'large' ? 'col-span-2 row-span-2' :
                    cake.size === 'medium' ? 'col-span-1 row-span-2' :
                    'col-span-1 row-span-1'
                  }`}
                >
                  <div className="absolute inset-0">
                    <MediaItem
                      src={cake.src}
                      type={cake.type}
                      alt={t(`bentoCakes.gallery.${cake.category}`)}
                      className="w-full h-full transition-transform duration-500 group-hover:scale-110 object-cover"
                      priority={cake.id <= 3}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden grid grid-cols-2 gap-3">
              {bentoGallery.slice(0, 4).map(cake => (
                <div key={cake.id} className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 aspect-square">
                  <MediaItem
                    src={cake.src}
                    type={cake.type}
                    alt={t(`bentoCakes.gallery.${cake.category}`)}
                    className="w-full h-full transition-transform duration-300 group-hover:scale-105 object-cover"
                    priority={cake.id <= 2}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

BentoCakes.displayName = 'BentoCakes';
export default BentoCakes;
