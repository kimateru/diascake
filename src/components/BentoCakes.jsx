import { memo, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CTAButton from './CTAButton';
import SectionHeader from './SectionHeader';

const BentoCakes = memo(() => {
  const { t } = useTranslation();
  const videoRefs = useRef({});

  const bentoGallery = [
    {
      id: 1,
      image: 'bento/bento1.jpg',
      category: 'classic',
      size: 'large' // Takes 2x2 grid space
    },
    {
      id: 2,
      image: 'bento/bento8.mp4',
      category: 'birthday',
      size: 'medium' // Takes 1x2 grid space
    },  
    {
      id: 3,
      image: 'bento/bento7.mp4',
      category: 'fruit',
      size: 'medium'
    },
    {
      id: 4,
      image: 'bento/bento4.jpg',
      category: 'elegant',
      size: 'medium'
    },
    {
      id: 5,
      image: 'bento/bento5.jpg',
      category: 'colorful',
      size: 'medium'
    },
  ];

  // Function to check if media is video
  const isVideo = (src) => src.endsWith('.mp4');

  // Intersection Observer for video autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            if (video.paused) {
              // Small delay to ensure smooth transition
              setTimeout(() => {
                video.play().catch((error) => {
                  // Handle autoplay restrictions gracefully
                  console.log('Autoplay prevented:', error);
                });
              }, 100);
            }
          } else {
            if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      {
        threshold: window.innerWidth < 768 ? 0.3 : 0.5, // Lower threshold for mobile
        rootMargin: '10px', // Start playing slightly before fully visible
      }
    );

    // Observe all video elements with a delay to ensure refs are set
    const observeVideos = () => {
      Object.values(videoRefs.current).forEach((video) => {
        if (video) observer.observe(video);
      });
    };

    // Use timeout to ensure all refs are properly set
    const timeoutId = setTimeout(observeVideos, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  });

  // MediaItem component to render either image or video
  const MediaItem = ({ src, alt, className, itemId }) => {
    if (isVideo(src)) {
      return (
        <video
          ref={(el) => {
            if (el) videoRefs.current[itemId] = el;
          }}
          src={src}
          alt={alt}
          className={className}
          muted
          loop
          playsInline
          preload="metadata"
          style={{ objectFit: 'cover' }}
          onLoadedMetadata={(e) => {
            // Ensure video is ready for smooth playback
            e.target.currentTime = 0;
          }}
          onError={(e) => {
            console.error('Video failed to load:', src, e);
          }}
        />
      );
    }
    
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
      />
    );
  };

  const getGridClass = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-2 row-span-3';
      default:
        return 'col-span-1 row-span-2';
    }
  };

  return (
    <section className="py-12 bg-main-white" id="BentoCakes">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
          
          {/* Left: Text Info */}
          <div className="flex flex-col" data-aos="fade-right">
            {/* Header Section */}
            <div className="mb-8">
              <SectionHeader
                badge={t('bentoCakes.badge')}
                title={t('bentoCakes.title')}
                subtitle={t('bentoCakes.subtitle')}
              />
              <p className="text-base text-gray-700 max-w-2xl leading-relaxed mt-4" data-aos="fade-up" data-aos-delay="200">
                {t('bentoCakes.description')}
              </p>
              <div className="font-semibold text-lg text-gray-900 max-w-2xl leading-relaxed mt-4" data-aos="fade-up" data-aos-delay="200">
                <p>{t('bentoCakes.priceOne')}</p>
                <p>{t('bentoCakes.priceTwo')}</p>
              </div>
            </div>

            {/* CTA */}
            <div>
              <CTAButton className="bg-main-brown! text-white hover:bg-white! hover:text-main-brown!" />
            </div>
          </div>

          {/* Right: Smaller Bento Grid */}
          <div className="h-full" data-aos="fade-left">
            {/* Desktop Bento Grid - Smaller */}
            <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-3 h-[600px]">
               {bentoGallery.slice(0, 6).map((cake) => (
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
                       src={cake.image}
                       alt={t(`bentoCakes.gallery.${cake.category}`)}
                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                       itemId={cake.id}
                     />
                   </div>
                 </div>
               ))}
             </div>

            {/* Mobile/Tablet Grid */}
            <div className="md:hidden grid grid-cols-2 gap-3">
              {bentoGallery.slice(0, 4).map((cake) => (
                <div
                  key={cake.id}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 aspect-square"
                >
                  <MediaItem
                    src={cake.image}
                    alt={t(`bentoCakes.gallery.${cake.category}`)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    itemId={`mobile-${cake.id}`}
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
