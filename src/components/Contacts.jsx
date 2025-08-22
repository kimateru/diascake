import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Contacts = memo(() => {
  const { t } = useTranslation();

  return (
    <section className="pt-16 bg-main-brown" id="Contacts">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="mb-6">
            <img
              src="/logo_beige.png"
              alt="Dias Cake Logo"
              className="h-16 w-auto mx-auto"
              width="auto"
              height="64"
              loading="lazy"
            />
          </div>
          <p className="text-lg text-white mb-4">
            {t('contacts.subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            {t('contacts.title')}
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
            {t('contacts.description')}
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Phone */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-main-brown/10 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {t('contacts.phone')}
            </h3>
            <a
              href="tel:+37368858855"
              className="relative text-white hover:text-white transition-colors duration-200 group"
            >
              {t('contacts.phoneNumber')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-main-brown transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-main-brown/10 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {t('contacts.email')}
            </h3>
            <a
              href="mailto:diascakes@gmail.com"
              className="relative text-white hover:text-white transition-colors duration-200 group"
            >
              {t('contacts.emailAddress')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-main-brown transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Address */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-main-brown/10 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {t('contacts.address')}
            </h3>
            <a
              href="https://maps.google.com/?q=Bd.+Cuza+Vodă+49/1,+Chișinău,+Moldova"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-white hover:text-white transition-colors duration-200 group"
            >
              {t('contacts.addressText')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-main-brown transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mb-16">
          <p className="text-lg text-white mb-6">
            {t('contacts.socialText')}
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com/diascakes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-all duration-200 transform hover:scale-110"
              aria-label={t('footer.socialMedia.facebook')}
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/diascakes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-all duration-200 transform hover:scale-110"
              aria-label={t('footer.socialMedia.instagram')}
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://tiktok.com/@diascakes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-all duration-200 transform hover:scale-110"
              aria-label={t('footer.socialMedia.tiktok')}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.16 20.5a6.33 6.33 0 0 0 10.86-4.43V7.83a8.24 8.24 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.2-.26z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Delivery Information - Full Width */}
      <div className="bg-white py-16" data-aos="fade-right">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center" >
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
              <h4 className="text-xl font-semibold text-white mb-4">
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
              <h4 className="text-xl font-semibold text-white mb-4">
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
    </section>
  );
});

Contacts.displayName = 'Contacts';

export default Contacts;
