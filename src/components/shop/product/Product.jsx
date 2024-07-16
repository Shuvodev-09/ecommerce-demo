import React, { useEffect, useState } from 'react';

const Product = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-7">
      {products.map(product => (
        <div
          key={product.id}
          className="card card-compact bg-stone-200 shadow-xl"
        >
          <img
            src={product?.img}
            alt={product?.name}
            className="h-72 object-fill"
          />
          <div className="card-body">
            <h2 className="card-title">{product?.name}</h2>
            <p>Category: {product?.category}</p>
            <p>Price: ${product?.price}</p>
            <p>Seller: {product?.seller}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleAddToCart(product)}
                className="btn text-white bg-stone-500 w-full hover:bg-orange-400"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
