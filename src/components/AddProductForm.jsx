import { useState } from 'react';
import './AddProductForm.css';

const AddProductForm = ({ addNewProduct }) => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    image: '',
    description: '',
  });

  function handleChange({ target: { value, name } }) {
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newProduct = {
      ...product,
      id: Math.random(),
      price: Number(product.price),
    };

    addNewProduct(newProduct);
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          placeholder="Bir ürün ismi giriniz!"
          name="title"
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          placeholder="Bir ürün fiyatı giriniz!"
          name="price"
          onChange={handleChange}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          placeholder="Bir ürün görseli giriniz!"
          name="image"
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          placeholder="Bir ürün açıklaması giriniz!"
          name="description"
          onChange={handleChange}
        />
      </label>

      <button type="submit">Yeni Ürün Ekle</button>
    </form>
  );
};

export default AddProductForm;
