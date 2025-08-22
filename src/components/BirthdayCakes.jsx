import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Palette, Cake, Clock } from 'lucide-react';
import CTAButton from './CTAButton';
import SectionHeader from './SectionHeader';

const BirthdayCakes = memo(() => {
  const { t } = useTranslation();

  const birthdayGallery = [
    {
      id: 1,
      image: 'https://www.vegkit.com/wp-content/uploads/sites/2/2024/05/vanilla_bday_cake_1.jpg'
    },
  ];

  const features = [
    {
      icon: Palette,
      title: t('birthdayCakes.features.themes'),
      description: 'Любимые персонажи и темы'
    },
    {
      icon: Cake,
      title: t('birthdayCakes.features.sizes'),
      description: 'От мини до больших тортов'
    },
    {
      icon: Clock,
      title: t('birthdayCakes.features.quick'),
      description: 'Готов за 24-48 часов'
    }
  ];

  return (
    <section className="py-12 bg-main-white" id="BirthdayCakes">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header Section */}
        <div className="mb-12" data-aos="fade-up">
          <SectionHeader
            badge={t('birthdayCakes.badge')}
            title={t('birthdayCakes.title')}
            subtitle={t('birthdayCakes.subtitle')}
          />
          <p className="text-gray-700 max-w-2xl leading-relaxed mt-4" data-aos="fade-up" data-aos-delay="200">
            {t('birthdayCakes.description')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Features */}
          <div data-aos="fade-right">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-main-brown/10 rounded-full flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-main-brown" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <CTAButton />
            </div>
          </div>

          {/* Right: Gallery */}
          <div className="grid grid-cols-1">
            {birthdayGallery.map((cake) => (
              <div key={cake.id} className="group relative overflow-hidden rounded-lg">
                <div className="overflow-hidden h-[400px]">
                  <img
                    src={cake.image}
                    alt="Birthday cake"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
});

BirthdayCakes.displayName = 'BirthdayCakes';

export default BirthdayCakes;
