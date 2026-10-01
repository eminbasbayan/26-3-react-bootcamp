import ProductCard from './ProductCard';
import { productsData } from '../../data/productsData';
import AddProductForm from './AddProductForm';
import './Products.css';
import { useState } from 'react';
import Modal from '../UI/Modal';

const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [isShowModal, setIsShowModal] = useState(false);

  function addNewProduct(newProduct) {
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
    // setProducts([newProduct, ...products]);
  }

  return (
    <div className="products">
      <h1>Products Component</h1>
      <AddProductForm
        addNewProduct={addNewProduct}
        setIsShowModal={setIsShowModal}
      />
      <div className="products-wrapper">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            setProducts={setProducts}
          />
        ))}
      </div>

      {isShowModal && (
        <Modal title="Form Hatası" description="Inputlar boş olamaz!" onClose={()=> setIsShowModal(false)} />
      )}
    </div>
  );
};

export default Products;
