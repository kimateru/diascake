import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Contacts = memo(() => {
  const { t } = useTranslation();

  return (
    <>
      <section className="pt-12 bg-main-brown" id="Contacts">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ">

          {/* Main Content - Left and Right Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

            {/* Left: Header + Contact Info */}
            <div className="space-y-8">
              {/* Header Section */}
              <div className="text-left" data-aos="fade-up">
                <div className="mb-4">
                  <img
                    src="/logo_beige.png"
                    alt="Dias Cake Logo"
                    className="h-12 w-auto"
                    width="auto"
                    height="48"
                    loading="lazy"
                  />
                </div>
                <p className="text-base text-white mb-2">
                  {t('contacts.subtitle')}
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                  {t('contacts.title')}
                </h2>
                <p className="text-base text-white max-w-2xl leading-relaxed">
                  {t('contacts.description')}
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Phone, Email, and Address */}
                <div className="space-y-4">
                  {/* Phone */}
                  <a href="tel:+37379426659" className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-main-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {t('contacts.phone')}
                      </h3>
                      <a href="tel:+37379426659" className="text-white text-sm hover:underline space-y-2 transition-all duration-200">{t('contacts.phoneNumber')}</a>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:diascakeshop@gmail.com" className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-main-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {t('contacts.email')}
                      </h3>
                      <a href="mailto:diascakeshop@gmail.com" className="text-white text-sm hover:underline space-y-2 transition-all duration-200">{t('contacts.emailAddress')}</a>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-main-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {t('contacts.address')}:
                      </h3>
                      <a href='https://maps.app.goo.gl/sQDfuhsS25XEwaP88' className="text-white text-sm hover:underline space-y-2 transition-all duration-200">Durleşti, Grigore Ureche 10/2</a>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <p className="text-base text-white mb-4">
                    {t('contacts.socialText')}
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/diascakeshop/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white transition-all duration-200 transform hover:scale-110"
                      aria-label={t('footer.socialMedia.facebook')}
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.instagram.com/diascakeshop/?utm_source=qr&igsh=MXhxMGxibGF5cjQ0NA%3D%3D#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white transition-all duration-200 transform hover:scale-110"
                      aria-label={t('footer.socialMedia.instagram')}
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Project Image - Aligned with Header */}
            <div className="flex items-start justify-center">
              <div className="w-full max-w-md relative">
                <img
                  src="/projects/projc2.webp"
                  alt="Dia's Cakes Project"
                  className="w-full h-[500px] object-cover opacity-90"
                  loading="lazy"
                />
                {/* Overlay to blend with background */}
                <div className="absolute inset-0 bg-main-brown/20"></div>
              </div>
            </div>
          </div>

        </div>
        <div className="bg-white py-16" data-aos="fade-right">
          <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-left mb-8" >
              <h3 className="text-3xl md:text-4xl font-semibold text-main-brown mb-4">
                {t('contacts.deliveryTitle')}
              </h3>
              <p className="text-lg text-gray-600">
                {t('contacts.deliverySubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Payment Methods */}
              <div>
                <h4 className="text-xl font-semibold text-main-brown mb-4">
                  {t('contacts.paymentMethods')}
                </h4>
                <p className="text-gray-700 font-semibold mb-6 leading-relaxed">
                  {t('contacts.paymentDescription')}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-main-brown rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('contacts.paymentOptions.cash')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-main-brown rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('contacts.paymentOptions.card')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-main-brown rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('contacts.paymentOptions.transfer')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-main-brown rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('contacts.paymentOptions.invoice')}</span>
                  </li>
                </ul>
              </div>

              {/* Delivery Methods */}
              <div>
                <h4 className="text-xl font-semibold text-main-brown mb-4">
                  {t('contacts.deliveryMethods')}
                </h4>
                <p className="text-gray-700 font-semibold mb-6 leading-relaxed">
                  {t('contacts.deliveryDescription')}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-main-brown rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('contacts.deliveryOptions.pickup')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-main-brown rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{t('contacts.deliveryOptions.courier')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Full Width Map */}
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d561.6999781999904!2d28.747469213286443!3d47.01696659585182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cbd5d15ac68625%3A0x7cc09d6182e63ea1!2sDia&#39;s%20cake%20shop!5e0!3m2!1sru!2s!4v1757927962506!5m2!1sru!2s"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Durlesti Grigore Ureche 10/2"
            className="w-full"
          >
          </iframe>

        </div>

        {/* Delivery Information - Full Width */}
      </section>
    </>
  );
});

Contacts.displayName = 'Contacts';

export default Contacts;
