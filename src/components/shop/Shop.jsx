import React, { useEffect, useState } from 'react';
import Product from './product/Product';
import Cart from './cart/Cart';
import { Helmet } from 'react-helmet';

const Shop = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = selectedProduct => {
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClearCart = () => {
    setCart('');
    setCart([]);
  };

  return (
    <div>
      <Helmet>
        <title>StYle Commerce | Shop</title>
      </Helmet>
      <div className="container mx-auto pt-5 ">
        <div className="flex">
          <div className="w-9/12 pe-4">
            <Product handleAddToCart={handleAddToCart} />
          </div>
          <div className="w-3/12 ps-4">
            <div className="relative">
              <Cart cart={cart} handleClearCart={handleClearCart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
