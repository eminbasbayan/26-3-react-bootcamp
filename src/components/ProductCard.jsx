function ProductCard() {
  return (
    <div className="product-card-container">
      <img
        className="product-image"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
        alt="Çanta Görseli"
      />
      <strong className="product-title">Product Title</strong>
      <span className="product-price">100₺</span>
    </div>
  );
}

export default ProductCard;
