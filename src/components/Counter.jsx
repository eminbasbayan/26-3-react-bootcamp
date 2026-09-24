import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log('Component render oldu!');

  function arttir() {
    // count = count + 1 hatalı kullanım
    // setCount(count + 1);
    setCount((prevState) => prevState + 1);
  }

  function azalt() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <button onClick={arttir}>Arttır</button>
      <span>{count}</span>
      <button onClick={azalt}>Azalt</button>
    </div>
  );
};

export default Counter;
