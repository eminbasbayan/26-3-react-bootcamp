import './ProductCard.css';

function ProductCard({ product }) {
  const { image, title, price } = product;

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="Çanta Görseli" />
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{price}₺</span>
      </div>
    </div>
  );
}

export default ProductCard;
