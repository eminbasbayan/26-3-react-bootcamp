import { useDispatch, useSelector } from 'react-redux';
import { arttir, azalt } from '../../redux/counterSlice';

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button onClick={() => dispatch(arttir({ deger: 2 }))}>Arttır</button>
      <span>{count}</span>
      <button onClick={() => dispatch(azalt({ deger: 2 }))}>Azalt</button>
    </div>
  );
};

export default Counter;
