import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-5 text-8xl">
      
      <h2 className="text-xl font-bold">L</h2>

      <span className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></span>

      <h2 className="text-xl font-bold">ADING</h2>

    </div>
  );
};

export default Loading;