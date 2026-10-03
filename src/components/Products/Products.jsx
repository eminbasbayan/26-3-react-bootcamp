import { useEffect, useReducer, useState } from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../../data/productsData';
import AddProductForm from './AddProductForm';
import Modal from '../UI/Modal';
import './Products.css';

function reducerFunction(state, action) {
  console.log(action);

  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: action.products };
    case 'OPEN_MODAL':
      return { ...state, isShowModal: true };
    case 'CLOSE_MODAL':
      return { ...state, isShowModal: false };
    case 'OPEN_LOADING':
      return { ...state, isLoading: true };
    case 'CLOSE_LOADING':
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

const initialState = {
  products: [],
  isShowModal: false,
  isLoading: true,
};

const Products = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const [products, setProducts] = useState(productsData);
  const [userList, setUserList] = useState([]);

  function addNewProduct(newProduct) {
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
    // setProducts([newProduct, ...products]);
  }

  /*   fetchUsers() */

  function fetchProducts() {
    dispatch({ type: 'GET_PRODUCTS', products: productsData });
  }

  useEffect(() => {
    function fetchUsers() {
      dispatch({ type: 'OPEN_LOADING' });
      setUserList([]);
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUserList(data))
        .catch((error) => console.log(error))
        .finally(() => dispatch({ type: 'CLOSE_LOADING' }));
    }

    fetchUsers();
  }, []);

  return (
    <div className="products">
      <h1>Products Component</h1>
      {/*  <button onClick={fetchUsers}>Kullanıcıları Getir</button> */}
      <button onClick={fetchProducts}>Ürünleri Getir</button>

      <ul>
        {state.isLoading && <h3>Veriler Yükleniyor...</h3>}
        {userList.map((user) => (
          <li key={user.id}>
            name: {user.name} username: {user.username} email: {user.email}{' '}
          </li>
        ))}
      </ul>

      <AddProductForm
        addNewProduct={addNewProduct}
        setIsShowModal={() => dispatch({ type: 'OPEN_MODAL' })}
      />
      <div className="products-wrapper">
        {state.products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            setProducts={setProducts}
          />
        ))}
      </div>

      {state.isShowModal && (
        <Modal
          title="Form Hatası"
          description="Inputlar boş olamaz!"
          onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
        />
      )}
    </div>
  );
};

export default Products;
