const ProductInput = ({ label, type, name, placeholder, onChange }) => {
  return (
    <label>
      {label}:
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </label>
  );
};

export default ProductInput;
