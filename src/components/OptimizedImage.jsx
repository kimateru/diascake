// OptimizedImage.jsx
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';

const OptimizedImage = ({ src, alt, className, priority = false }) => {
  const cld = new Cloudinary({
    cloud: { cloudName: 'dooqa8ysx' }, // your Cloudinary name
  });

  const cldImg = cld.image(src)
    .format('auto')     // WebP/AVIF automatically
    .quality('auto')    // optimized quality
    .resize(fill().width(600).height(600)); // adjust as needed

  return (
    <AdvancedImage
      cldImg={cldImg}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
};

export default OptimizedImage;
