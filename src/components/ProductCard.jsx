import React from 'react';

const ProductCard = ({ image, title, price, buttonLabel }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-red-500 text-lg mb-4">{price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">{buttonLabel}</button>
      </div>
    </div>
  );
};

export default ProductCard;
