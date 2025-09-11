// OptimizedVideo.jsx
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

const OptimizedVideo = ({
  src,
  className,
  autoplay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "metadata",
}) => {
  const cld = new Cloudinary({
    cloud: { cloudName: 'dooqa8ysx' }, // your Cloudinary name
  });

  const cldVid = cld.video(src)
    .format('auto')   // mp4/webm
    .quality('auto'); // adaptive bitrate

  return (
    <AdvancedVideo
      cldVid={cldVid}
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      className={className}
      poster={`https://res.cloudinary.com/dooqa8ysx/video/upload/${src}.jpg`}
    />
  );
};

export default OptimizedVideo;
