import { useState } from 'react';
import './AddProductForm.css';
import ProductInput from './ProductInput';
import { productInputs } from '../data/productInputs';

const AddProductForm = ({ addNewProduct }) => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    image: '',
    description: '',
  });

  console.log(product);

  function handleChange({ target: { value, name } }) {
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isFormValid = Object.values(product).every(
      (value) => value.trim() !== '',
    );

    if (!isFormValid) {
      alert('Inputlar boş bırakılamaz!');
      return;
    }

    const newProduct = {
      ...product,
      id: Math.random(),
      price: Number(product.price),
    };

    addNewProduct(newProduct);
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {productInputs.map((input) => (
        <ProductInput key={input.name} {...input} onChange={handleChange} />
      ))}
      <button type="submit">Yeni Ürün Ekle</button>
    </form>
  );
};

export default AddProductForm;
