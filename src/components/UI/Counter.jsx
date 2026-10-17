import { useContext, useState } from 'react';
import { CounterContext } from '../../context/CounterContext';

const Counter = () => {
  const { count, setCount } = useContext(CounterContext);

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
