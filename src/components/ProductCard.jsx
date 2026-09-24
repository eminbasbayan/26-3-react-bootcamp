import Button from './Button';
import './ProductCard.css';

function ProductCard({ product }) {
  const { image, title, price, description } = product;

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="Çanta Görseli" />
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <p className="product-description">{description}</p>
        <span className="product-price">{price}₺</span>
        <div className="product-buttons">
          <Button>
            <strong>Sepete Ekle</strong>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
