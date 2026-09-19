import ProductCard from './ProductCard';
import "./Products.css";

const Products = () => {
  return (
    <div className="products">
      <h1>Products Component</h1>
      <div className="products-wrapper">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
