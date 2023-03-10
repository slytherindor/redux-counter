import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, set } from './actions';
import { SetCounter } from './SetCounter';

export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => dispatch(increment(1))}>Increment</button>
        <button onClick={() => dispatch(set(0))}>Reset</button>
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
