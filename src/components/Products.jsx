import ProductCard from './ProductCard';
import { productsData } from '../data/productsData';
import './Products.css';

const Products = () => {
  return (
    <div className="products">
      <h1>Products Component</h1>
      <div className="products-wrapper">
        {productsData.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
