import ProductCard from './ProductCard';
import { productsData } from '../data/productsData';
import AddProductForm from './AddProductForm';
import './Products.css';
import { useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState(productsData);

  console.log(products);
  

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
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
