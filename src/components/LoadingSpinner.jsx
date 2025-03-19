import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      <div className="custom-loader"></div>
    </div>
  );
};

export default LoadingSpinner;
