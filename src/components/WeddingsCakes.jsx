import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Star, Users, Truck } from 'lucide-react';
import CTAButton from './CTAButton';
import SectionHeader from './SectionHeader';

const WeddingsCakes = memo(() => {
  const { t } = useTranslation();

  const weddingGallery = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'classic'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'modern'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'floral'
    }
  ];


  return (
    <section className="py-16 bg-main-brown text-white" id="WeddingsCakes">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header Section */}
        <div className="mb-16">
          <SectionHeader
            badge={t('weddingCakes.badge')}
            title={t('weddingCakes.title')}
            subtitle={t('weddingCakes.subtitle')}
            textColor="text-white"
            badgeColor="text-white/80"
            subtitleColor="text-white/90"
          />
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed mt-4">
            {t('weddingCakes.description')}
          </p>
        </div>
        

        {/* Gallery Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-12">
            {t('weddingCakes.galleryTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingGallery.map((cake) => (
              <div key={cake.id} className="group relative overflow-hidden bg-white/10 rounded-lg">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={cake.image}
                    alt={t(`weddingCakes.gallery.${cake.category}`)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {t(`weddingCakes.gallery.${cake.category}`)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/10 p-8 md:p-12 rounded-lg">
          <h3 className="text-3xl font-semibold mb-4">
            Готовы создать торт вашей мечты?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для персональной консультации. Мы обсудим все детали и создадим идеальный торт для вашего особенного дня.
          </p>
          <div className="flex justify-center">
            <CTAButton />
          </div>
        </div>

      </div>
    </section>
  );
});

WeddingsCakes.displayName = 'WeddingsCakes';

export default WeddingsCakes;
