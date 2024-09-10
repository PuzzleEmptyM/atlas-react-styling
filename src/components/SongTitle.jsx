import React from 'react';

const SongTitle = ({ title, author }) => {
  return (
    <div className="text-left">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500">{artist}</p>
    </div>

  );
};

export default SongTitle;
