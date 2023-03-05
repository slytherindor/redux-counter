import { DECREMENT, INCREMENT, SET } from './actions';

const initialstate = { value: 0 };

export const reducer = (state = initialstate, action) => {
  if (action.type === INCREMENT) {
    return { value: state.value + action.payload };
  }

  if (action.type === DECREMENT) {
    return { value: state.value - action.payload };
  }

  if (action.type === SET) {
    return { value: action.payload };
  }

  return state;
};
