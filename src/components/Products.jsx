import ProductCard from './ProductCard';
import { productsData } from '../data/productsData';
import AddProductForm from './AddProductForm';
import './Products.css';
import { useState } from 'react';
import Modal from './Modal';

const Products = () => {
  const [products, setProducts] = useState(productsData);

  function addNewProduct(newProduct) {
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
    // setProducts([newProduct, ...products]);
  }

  return (
    <div className="products">
      <h1>Products Component</h1>
      <AddProductForm addNewProduct={addNewProduct} />
      <div className="products-wrapper">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} setProducts={setProducts} />
        ))}
      </div>

      <Modal />
    </div>
  );
};

export default Products;
