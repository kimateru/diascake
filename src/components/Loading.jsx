import { memo } from 'react';

const Loading = memo(({ message = 'Loading...' }) => {
  return (
    <div className="loading">
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <p className="loading-message">{message}</p>
      </div>
    </div>
  );
});

Loading.displayName = 'Loading';

export default Loading;
