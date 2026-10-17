import { createContext, useState } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prevCartItems) => [product, ...prevCartItems]);
  }

  function removeFromCart(productId) {
    const filteredCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== productId,
    );
    setCartItems(filteredCartItems);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
