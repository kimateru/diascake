import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Contacts = memo(() => {
  const { t } = useTranslation();

  return (
    <section className="pt-16 bg-main-brown" id="Contacts">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-up">
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
        <div className="flex flex-col md:flex-row justify-center items-center gap-20 mb-12">

          <div className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20'>
            {/* Phone */}
            <a href="tel:+37379426659" className="text-center">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-main-brown/10 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t('contacts.phone')}
              </h3>
              <p className="text-white hover:text-white transition-colors duration-200 group">{t('contacts.phoneNumber')}</p>
            </a>

            {/* Email */}
            <a href="mailto:diascakeshop@gmail.com" className="text-center">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-main-brown/10 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t('contacts.email')}
              </h3>
              <p className="text-white hover:text-white transition-colors duration-200 group">{t('contacts.emailAddress')}</p>
            </a>
          </div>

        </div>
        {/* Address and working hours */}
        <div className="mb-5">
          <div className='flex flex-col items-center justify-center text-center'>
            <div className='flex items-center justify-center text-center mb-2 gap-4'>
              <h3 className="text-xl font-semibold text-white">
                {t('contacts.address')}:
              </h3>
              <p className="text-white text-xl font-semibold">
                Durleşti, Grigore Ureche 10/2
              </p>
            </div>

            <div className="w-full max-w-md mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22515.294198137417!2d28.74574730330879!3d47.01991097001267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cbd5f619422b07%3A0x9e0f1282890c881e!2zMiwgU3RyYWRhIEdyaWdvcmUgVXJlY2hlIDEwLCBNRC0yMDAzLCBEdXJsZcWfdGksINCc0L7Qu9C00L7QstCw!5e1!3m2!1sru!2s!4v1755971678881!5m2!1sru!2s" width="100%"
                height="300"
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Durlesti Grigore Ureche 10/2"
                className="rounded-lg"
              >
              </iframe>
            </div>
            <div className='mt-4 text-white text-lg space-y-2'>
              {/* <p>{t('contacts.workingHours')}:</p>
              <p>{t('contacts.workingHours.weekdays')}</p>
              <p>{t('contacts.workingHours.weekends')}</p> */}
            </div>
          </div>
        </div>


        {/* Social Media */}
        <div className="text-center mb-16">
          <p className="text-lg text-white mb-6">
            {t('contacts.socialText')}
          </p>
          <div className="flex justify-center space-x-6">
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
