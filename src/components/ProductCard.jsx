import './ProductCard.css';

function ProductCard(props) {
  const image = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png';
  const title = 'Product Title';
  const price = 200;

  console.log(props.fullName);
  

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
