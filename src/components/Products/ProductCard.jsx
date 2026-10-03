import Button from '../UI/Button';
import './ProductCard.css';

function ProductCard({ product, setProducts }) {
  const { id, image, title, price, description } = product;

  function deleteProduct() {
    if (confirm('Ürünü silmek istediğine emin misin?')) {
      setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
    }
  }

  return (
    <div className="product-card">
     {/*  <img className="product-image" src={image} alt="Çanta Görseli" /> */}
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <p className="product-description">{description}</p>
        <span className="product-price">{price}₺</span>
        <div className="product-buttons">
          <Button onClick={deleteProduct}>
            <strong>Ürünü Sil</strong>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
