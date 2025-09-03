import { memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = memo(() => {
  const { t, i18n } = useTranslation();
  const swiperRef = useRef(null);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Maria Popescu",
      review: "Tortul de nuntă a fost absolut perfect! Gustul a fost incredibil și designul a depășit toate așteptările. Recomand cu încredere DiasCake pentru orice ocazie specială.",
      language: "ro"
    },
    {
      id: 2,
      name: "Alexandru Ionescu",
      review: "Am comandat tortul pentru ziua de naștere a fiicei mele și a fost un adevărat succes! Toți invitații au fost încântați de gust. Calitatea este excepțională.",
      language: "ro"
    },
    {
      id: 3,
      name: "Elena Dumitrescu",
      review: "Torturile bento sunt perfecte pentru momentele speciale! Designul este frumos și gustul este delicios. Serviciul este rapid și profesional.",
      language: "ro"
    },
    {
      id: 4,
      name: "Cristian Moldovan",
      review: "Cea mai bună brutărie din Chișinău! Torturile sunt făcute cu multă grijă și ingrediente de calitate. Prețurile sunt corecte și serviciul este excelent.",
      language: "ro"
    },
    {
      id: 5,
      name: "Анна Петрова",
      review: "Свадебный торт был просто потрясающим! Вкус невероятный, дизайн превзошел все ожидания. Очень рекомендую DiasCake для особых случаев.",
      language: "ru"
    },
    {
      id: 6,
      name: "Дмитрий Козлов",
      review: "Заказывали торт на день рождения, и он получился идеальным! Все гости были в восторге от вкуса и внешнего вида. Качество на высшем уровне.",
      language: "ru"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden" id="Testimonials">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Logo pattern */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-5">
          <img 
            src="/main_logo.png" 
            alt="Logo pattern" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-20 left-10 w-24 h-24 opacity-5">
          <img 
            src="/main_logo.png" 
            alt="Logo pattern" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 opacity-5">
          <img 
            src="/main_logo.png" 
            alt="Logo pattern" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Main brown dots */}
        <div className="absolute top-20 left-1/4 w-8 h-8 rounded-full bg-main-brown/10"></div>
        <div className="absolute bottom-32 right-1/3 w-12 h-12 rounded-full bg-main-brown/8"></div>
        <div className="absolute top-1/2 left-10 w-6 h-6 rounded-full bg-main-brown/12"></div>
        <div className="absolute bottom-16 right-1/4 w-10 h-10 rounded-full bg-main-brown/6"></div>
        <div className="absolute top-1/4 right-1/3 w-14 h-14 rounded-full bg-main-brown/5"></div>
      </div>

      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 gap-10 items-start">
          {/* Header */}
          <div className="lg:col-span-1" data-aos="fade-up">
            <SectionHeader
              textColor="text-main-brown"
              badgeColor="text-main-brown/80"
              subtitleColor="text-main-brown/90"
              badge={t('testimonials.badge')}
              title={t('testimonials.title')}
              subtitle={t('testimonials.subtitle')}
            />
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="mt-12" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.testimonials-prev',
              nextEl: '.testimonials-next',
            }}
            pagination={{
              clickable: true,
              el: '.testimonials-pagination',
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-main-white rounded-lg p-6 shadow-lg border border-main-brown/10 h-full flex flex-col">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <svg 
                      className="w-8 h-8 text-main-brown/30" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  
                  {/* Review text */}
                  <p className="text-main-brown text-sm leading-relaxed mb-4 flex-1">
                    "{testimonial.review}"
                  </p>
                  
                  {/* Reviewer name */}
                  <div className="border-t border-main-brown/10 pt-4">
                    <p className="text-main-brown font-semibold text-sm">
                      — {testimonial.name}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              className="testimonials-prev cursor-pointer flex items-center justify-center w-12 h-12 bg-main-brown border-2 border-main-brown text-white hover:bg-main-brown/80 transition-all duration-200 shadow-md hover:shadow-lg rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Pagination */}
            <div className="testimonials-pagination flex justify-center space-x-2"></div>

            <button
              className="testimonials-next cursor-pointer flex items-center justify-center w-12 h-12 bg-main-brown border-2 border-main-brown text-white hover:bg-main-brown/80 transition-all duration-200 shadow-md hover:shadow-lg rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;
