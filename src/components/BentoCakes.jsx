import { memo, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Sparkles, Clock, Palette } from 'lucide-react';
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
      size: 'small'
    },
    {
      id: 5,
      image: 'bento/bento5.jpg',
      category: 'colorful',
      size: 'small'
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
        {/* Header Section */}
        <div className="mb-12" data-aos="fade-up">
          <SectionHeader
            badge={t('bentoCakes.badge')}
            title={t('bentoCakes.title')}
            subtitle={t('bentoCakes.subtitle')}
          />
          <p className="text-lg text-gray-700 max-w-2xl leading-relaxed mt-4" data-aos="fade-up" data-aos-delay="200">
            {t('bentoCakes.description')}
          </p>
          <p className="font-semibold text-lg text-gray-900 max-w-2xl leading-relaxed mt-4" data-aos="fade-up" data-aos-delay="200">
            {t('bentoCakes.price')}
          </p>
        </div>

   

                {/* Bento Grid Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-12 text-gray-900" data-aos="fade-up">
            {t('bentoCakes.galleryTitle')}
          </h3>
          
          {/* Desktop Bento Grid */}
          <div className="hidden md:grid grid-cols-4 grid-rows-4 gap-4 h-[900px]">
             {bentoGallery.map((cake) => (
               <div
                 key={cake.id}
                 className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${getGridClass(cake.size)}`}
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
           <div className="md:hidden grid grid-cols-1 md:grid-cols-3 gap-4">
             {bentoGallery.slice(0, 6).map((cake) => (
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
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <span className="text-white font-semibold text-sm text-center px-2">
                     {t(`bentoCakes.gallery.${cake.category}`)}
                   </span>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white p-8 md:p-12 rounded-2xl shadow-lg" data-aos="fade-up">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900">
              {t('bentoCakes.ctaTitle')}
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t('bentoCakes.ctaDescription')}
            </p>
            <div className="flex justify-center">
              <CTAButton />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
});

BentoCakes.displayName = 'BentoCakes';

export default BentoCakes;
