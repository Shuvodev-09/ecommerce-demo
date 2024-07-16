import React from 'react';

const Cart = ({ cart, handleClearCart }) => {
  let total = 0;

  let quantity = 0;
  let shipping = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  const tax = parseFloat(((total + shipping) * 0.1).toFixed(2));

  return (
    <div className="bg-stone-500 text-white p-6 rounded-md fixed ">
      <h1 className="my-3 text-2xl">Selected Items : {cart.length}</h1>
      <p className="my-3 text-xl">Shipping Charge : ${shipping}</p>

      <p className="my-3 text-xl">Tax : ${tax}</p>
      <h1>Total Price : ${total}</h1>
      <div className="my-5">
        <button
          className="btn bg-stone-700 hover:bg-orange-400 text-white btn-sm"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <button className="btn bg-stone-700 hover:bg-orange-400 text-white btn-sm lg:ms-6 md:ms-0 md:mt-2 sm:mt-2">
          Process the order
        </button>
      </div>
    </div>
  );
};

export default Cart;
