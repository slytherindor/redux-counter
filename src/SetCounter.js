import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from './actions';
export const SetCounter = () => {
  const initcount = useSelector((state) => state.value);
  const [count, setCount] = useState(initcount);
  const dispatch = useDispatch();
  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(Number(count)));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
