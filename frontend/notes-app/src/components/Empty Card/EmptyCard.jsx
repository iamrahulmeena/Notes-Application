import React from 'react';

const EmptyCard = ({ imgSrc, message }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      {/* Image */}
      <img src={imgSrc} alt="No Notes" className="w-80 mb-5" />
      {/* Message */}
      <p className="text-xl font-medium text-slate-700 text-center leading-7">
        {message}
      </p>
    </div>
  );
};

export default EmptyCard;
