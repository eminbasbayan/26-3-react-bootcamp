import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../../data/productsData';
import AddProductForm from './AddProductForm';
import Modal from '../UI/Modal';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [isShowModal, setIsShowModal] = useState(false);
  const [userList, setUserList] = useState([]);

  function addNewProduct(newProduct) {
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
    // setProducts([newProduct, ...products]);
  }

  function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUserList(data));
  }

  /*   fetchUsers() */

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="products">
      <h1>Products Component</h1>
      <button onClick={fetchUsers}>Kullanıcıları Getir</button>

      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            name: {user.name} username: {user.username} email: {user.email}{' '}
          </li>
        ))}
      </ul>

      <AddProductForm
        addNewProduct={addNewProduct}
        setIsShowModal={setIsShowModal}
      />
      {/*  <div className="products-wrapper">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            setProducts={setProducts}
          />
        ))}
      </div> */}

      {isShowModal && (
        <Modal
          title="Form Hatası"
          description="Inputlar boş olamaz!"
          onClose={() => setIsShowModal(false)}
        />
      )}
    </div>
  );
};

export default Products;
