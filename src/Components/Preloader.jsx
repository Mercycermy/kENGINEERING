// Components/Preloader.jsx
import React from 'react'

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="w-16 h-16 border-4 border-[#00A651]  border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Preloader;
