import { useState } from 'react';
import './AddProductForm.css';
import ProductInput from './ProductInput';
import { productInputs } from '../../data/productInputs';

const AddProductForm = ({ addNewProduct, setIsShowModal }) => {
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

    const isFormValid = Object.values(product).every(
      (value) => value.trim() !== '',
    );

    if (!isFormValid) {
      setIsShowModal(true)
      return;
    }

    const newProduct = {
      ...product,
      id: Math.random(),
      price: Number(product.price),
    };

    addNewProduct(newProduct);

    setProduct({
      title: '',
      price: '',
      image: '',
      description: '',
    });
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {productInputs.map((input) => (
        <ProductInput
          key={input.name}
          {...input}
          onChange={handleChange}
          value={product[input.name]}
        />
      ))}
      <button type="submit">Yeni Ürün Ekle</button>
    </form>
  );
};

export default AddProductForm;
