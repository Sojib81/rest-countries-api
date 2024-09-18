import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  let totalPopulation = 0;
  for (let i = 0; i < cart.length; i++) {
    const country = cart[i];
    totalPopulation = totalPopulation + country.common;
  }
  return (
    <div>
      <h2>Country Added :{cart.length}</h2>
      <h3>{totalPopulation}</h3>
    </div>
  );
};

export default Cart;
