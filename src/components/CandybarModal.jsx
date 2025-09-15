import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CTAButton from './CTAButton';
import OptimizedImage from './OptimizedImage';

const CandybarModal = memo(({ item, onClose }) => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger enter animation on mount
        const id = requestAnimationFrame(() => setIsVisible(true));
        const onKeyDown = (e) => {
            if (e.key === 'Escape') handleClose();
        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
            cancelAnimationFrame(id);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Wait for transition to finish before unmount
        setTimeout(() => {
            onClose();
        }, 220);
    };

    if (!item) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                onClick={handleClose}
                aria-hidden="true"
            />

            {/* Panel */}
            <div
                className={`relative z-[61] bg-white w-[92vw] max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-200 ease-out transform ${
                    isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'
                }`}
            >
                <button
                    onClick={handleClose}
                    className="cursor-pointer absolute top-3 right-3 bg-white/90 border border-gray-300 text-gray-800 w-10 h-10 flex items-center justify-center hover:bg-main-brown hover:text-white transition-all duration-200 ease-out"
                    aria-label={t('candybar.close')}
                    type="button"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="h-[360px]">
                        <OptimizedImage src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 md:p-10 flex flex-col">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.name}</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">{item.description}</p>
                        <div className="mt-auto flex items-center justify-between">
                            <span className="text-2xl font-bold text-main-brown">{item.price} MDL</span>
                            <CTAButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

CandybarModal.displayName = 'CandybarModal';

export default CandybarModal;


