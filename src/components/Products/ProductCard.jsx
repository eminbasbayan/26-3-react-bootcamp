import { useContext } from 'react';
import Button from '../UI/Button';
import './ProductCard.css';
import { CartContext } from '../../context/CartContext';

function ProductCard({ product, setProducts, cart }) {
  const { id, image, title, price, description } = product;
  const { addToCart, removeFromCart } = useContext(CartContext);

  function deleteProduct() {
    if (confirm('Ürünü silmek istediğine emin misin?')) {
      setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
    }
  }

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="Çanta Görseli" />
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <p className="product-description">{description}</p>
        <span className="product-price">{price}₺</span>
        <div className="product-buttons flex flex-col gap-4">
          {cart ? (
            <Button onClick={() => removeFromCart(id)}>
              <strong>Sepetten Sil</strong>
            </Button>
          ) : (
            <>
              <Button onClick={() => addToCart(product)}>
                <strong>Sepete Ekle</strong>
              </Button>
              <Button onClick={deleteProduct}>
                <strong>Ürünü Sil</strong>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
