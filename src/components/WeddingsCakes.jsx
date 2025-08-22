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
      image: 'https://www.womangettingmarried.com/wp-content/uploads/2024/11/elegant-winter-wedding-cake.jpg',
      category: 'classic'
    },
    {
      id: 2,
      image: 'https://cdn0.hitched.co.uk/article/1360/original/1280/jpg/160631-1-simple-wedding-cake-with-flowers.jpeg',
      category: 'modern'
    },
    {
      id: 3,
      image: 'https://amycakesbakes.com/wp-content/uploads/2024/03/white-wedding-cake-flavor-by-Amycakes-Bakery.jpg',
      category: 'floral'
    }
  ];


  return (
    <section className="py-16 bg-main-brown text-white" id="WeddingsCakes">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header Section */}
        <div className="mb-16" data-aos="fade-up">
          <SectionHeader
            badge={t('weddingCakes.badge')}
            title={t('weddingCakes.title')}
            subtitle={t('weddingCakes.subtitle')}
            textColor="text-white"
            badgeColor="text-white/80"
            subtitleColor="text-white/90"
          />
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed mt-4" data-aos="fade-up" data-aos-delay="200">
            {t('weddingCakes.description')}
          </p>
        </div>
        

        {/* Gallery Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-12" data-aos="fade-up">
            {t('weddingCakes.galleryTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingGallery.map((cake) => (
              <div 
                key={cake.id} 
                className="group relative overflow-hidden bg-white/10 rounded-lg"
              >
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
        <div className="text-center bg-white/10 p-8 md:p-12 rounded-lg" data-aos="fade-up">
          <h3 className="text-3xl font-semibold mb-4">
            {t('weddingCakes.ctaTitle')}
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            {t('weddingCakes.ctaDescription')}
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
