import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import CTAButton from './CTAButton';
import SectionHeader from './SectionHeader';

const PartnerProjects = memo(() => {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-main-white relative" id="PartnerProjects">
      {/* Background Image with Darken Effect */}
      <div className="absolute inset-0">
        <img 
          src="/projects/projc3.webp" 
          alt="Partner projects background" 
          className="w-full h-full object-cover brightness-35"
          loading="lazy"
        />
      </div>
      
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
          
          {/* Left: Text Info */}
          <div className="flex flex-col justify-center" data-aos="fade-right">
            {/* Header Section */}
            <div className="mb-8">
              <SectionHeader
                badge={t('partnerProjects.badge')}
                title={t('partnerProjects.title')}
                subtitle={t('partnerProjects.subtitle')}
                textColor="text-white"
                badgeColor="text-white/80"
                subtitleColor="text-white/90"
              />
              <p className="text-base text-white/80 max-w-2xl leading-relaxed mt-4" data-aos="fade-up" data-aos-delay="200">
                {t('partnerProjects.description')}
              </p>
            </div>

            {/* CTA */}
            <div>
              <CTAButton className="bg-white! text-main-brown hover:bg-main-brown! hover:text-white!" />
            </div>
          </div>

          {/* Right: Project Images Grid */}
          <div className="h-full" data-aos="fade-left">
            <div className="grid grid-cols-3 gap-4 h-full">
              {/* Top Left Image */}
              <div className="group relative overflow-hidden top-5">
                <img
                  src="/projects/projc1.webp"
                  alt="Partner collaboration"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Top Right Image */}
              <div className="group relative overflow-hidden">
                <img
                  src="/projects/projc2.webp"
                  alt="Collaboration event"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              
              {/* Bottom Right Image */}
              <div className="group relative overflow-hidden top-5">
                <img
                  src="/projects/projc4.webp"
                  alt="Partnership project"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
});

PartnerProjects.displayName = 'PartnerProjects';

export default PartnerProjects;
