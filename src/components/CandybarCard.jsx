import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const CandybarCard = memo(({ item, onReadMore }) => {
    const { t } = useTranslation();

    return (
        <div className="bg-white overflow-hidden flex flex-col group lg:min-h-[560px]">
            {/* Image */}
            <div className="relative h-[320px] sm:h-[360px] md:h-[400px] lg:h-[420px] overflow-hidden shrink-0">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>

            {/* Footer: name + button */}
            <div className="px-2 sm:px-4 md:px-0 md:p-0 flex-1 flex items-center justify-between flex-col lg:items-start lg:justify-baseline">
                <h3 className="block leading-snug text-xl md:text-2xl font-medium text-gray-900 overflow-hidden py-5 lg:w-[258px] lg:h-[106px]">{item.name}</h3>
                <button
                    onClick={() => onReadMore(item)}
                    className="w-full cursor-pointer inline-block bg-white text-gray-900 px-5 py-3 text-xs md:text-sm font-medium tracking-wider uppercase transition-all duration-200 border border-main-brown hover:bg-main-brown hover:text-white"
                    aria-label={t('candybar.readMore')}
                    type="button"
                >
                    {t('candybar.readMore')}
                </button>
            </div>
        </div>
    );
});

CandybarCard.displayName = 'CandybarCard';

export default CandybarCard;


