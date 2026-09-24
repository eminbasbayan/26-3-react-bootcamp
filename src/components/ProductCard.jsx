import { useState } from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  const { image, title, price, description } = product;
  const [titleState, setTitleState] = useState(title)

  function titleChange(){
    setTitleState("Title Değişti!")
  }
 
  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="Çanta Görseli" />
      <div className="product-info">
        <strong className="product-title">{titleState}</strong>
        <p className='product-description'>{description}</p>
        <button onClick={titleChange}>Title Değiştir</button>
        <span className="product-price">{price}₺</span>
      </div>
    </div>
  );
}

export default ProductCard;
