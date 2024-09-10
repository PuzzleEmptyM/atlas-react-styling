import React from 'react';
import img from '../assets/placeholder.svg'

const CoverArt = ({ src, alt }) => {
  return (
    <div className="w-64 h-64 overflow-hidden">
      <img src={img} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default CoverArt;
