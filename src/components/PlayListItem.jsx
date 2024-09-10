import React from 'react';

const PlayListItem = ({ title, genre, length }) => {
  return (
    <div className="p-4 border-b border-gray-300 w-64 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{genre}</p>
      <p className="text-sm text-gray-500">{length}</p>
    </div>
  );
};

export default PlayListItem;
