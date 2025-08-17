import { memo } from 'react';

const SectionHeader = memo(({ badge, title, subtitle, textColor = 'text-gray-900', badgeColor = 'text-gray-600', subtitleColor = 'text-gray-600', alignment = 'text-left' }) => {
  return (
    <div className={alignment}>
      {badge && (
        <p className={`uppercase tracking-widest text-sm ${badgeColor} mb-4`}>
          {badge}
        </p>
      )}
      <h2 className={`text-4xl md:text-5xl font-semibold ${textColor} mb-6 leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl ${subtitleColor} max-w-xl leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
});

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;
