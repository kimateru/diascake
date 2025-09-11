import { memo } from 'react';
import SkeletonLoader from './SkeletonLoader';

const Loading = memo(({ message = 'Loading...', type = 'text' }) => {
  return (
    <div className="py-12 bg-main-white">
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-8 h-8 border-2 border-main-brown border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">{message}</p>
        </div>
        <SkeletonLoader type={type} />
      </div>
    </div>
  );
});

Loading.displayName = 'Loading';

export default Loading;
