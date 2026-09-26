const ProductInput = ({ label, type, name, placeholder, onChange, value }) => {
  return (
    <label>
      {label}:
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

export default ProductInput;
