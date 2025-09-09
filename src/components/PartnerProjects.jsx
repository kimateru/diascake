import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import CTAButton from './CTAButton';

const PartnerProjects = memo(() => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-main-white relative" id="PartnerProjects">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative" data-aos="fade-up">
        {/*  dark this image a bit */}
        <img src="/projects/projc3.jpg" alt="Partner projects" className="w-full h-full object-cover absolute top-0 left-0 brightness-50" />
        {/* Main content block - centered white card */}
        <div className="relative text-white! py-[110px] px-8 md:p-12 lg:p-16 max-w-6xl mx-auto flex flex-col items-center justify-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 text-center">
            {t('partnerProjects.title')}
          </h2>
          <h3 className="text-xl md:text-2xl text-white mb-6 text-center font-light">
            {t('partnerProjects.subtitle')}
          </h3>
          <p className="text-lg text-white leading-relaxed mb-8 text-center max-w-xl mx-auto">
            {t('partnerProjects.description')}
          </p>
          <div className="text-center">
            <CTAButton />
          </div>

          {/* Bottom left decorative image - rotated */}
          <div className="absolute -bottom-12 left-9 lg:left-8 w-34 h-34 transform -rotate-12 ">
            <div className="w-full h-full bg-white ">
              <img
                src="/projects/projc1.jpg"
                alt="Partner collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Top right decorative images - overlapping */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:right-0 lg:top-12 lg:right-8 z-0">
            {/* First image */}
            <div className="md:absolute w-32 h-32 bg-white transform -rotate-6 right-32 md:-top-8">
              <img
                src="/projects/projc4.jpg"
                alt="Partnership project"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Second image - overlapping */}
            <div className="absolute -top-8 -right-12 w-32 h-32 bg-white transform rotate-12 md:right-16">
              <img
                src="/projects/projc2.jpg"
                alt="Collaboration event"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
});

PartnerProjects.displayName = 'PartnerProjects';

export default PartnerProjects;
