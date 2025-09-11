import { memo } from 'react';

const SkeletonLoader = memo(({ 
  type = 'card', 
  className = '',
  count = 1,
  ...props 
}) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        );
      
      case 'grid':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="h-32 bg-gray-200"></div>
                <div className="p-3 space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'bento':
        return (
          <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[600px]">
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i}
                className={`bg-gray-200 rounded-lg animate-pulse ${
                  i === 0 ? 'col-span-2 row-span-2' : 
                  i === 1 || i === 2 ? 'col-span-1 row-span-2' : 
                  'col-span-1 row-span-1'
                }`}
              ></div>
            ))}
          </div>
        );
      
      case 'text':
        return (
          <div className="space-y-3 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        );
      
      case 'image':
        return (
          <div className="bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
        );
      
      default:
        return <div className="h-4 bg-gray-200 rounded animate-pulse"></div>;
    }
  };

  if (count > 1) {
    return (
      <div className={className} {...props}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i}>
            {renderSkeleton()}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={className} {...props}>
      {renderSkeleton()}
    </div>
  );
});

SkeletonLoader.displayName = 'SkeletonLoader';

export default SkeletonLoader;
