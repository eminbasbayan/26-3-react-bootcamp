import { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/Products/ProductCard';
import UserList from '../components/UserList';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);



  return (
    <div className="cart-page">
      <div className="container mx-auto ">
        <UserList />
     {/*    <h1>CartPage</h1>
        <div className="products-wrapper">
          {cartItems.map((cartItem) => (
            <ProductCard product={cartItem} key={cartItem.id} cart />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default CartPage;
