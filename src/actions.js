export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET = 'SET';

export const increment = (amount) => ({ type: INCREMENT, payload: amount });
export const decrement = (amount) => ({
  type: DECREMENT,
  payload: amount
});
export const set = (amount) => ({
  type: SET,
  payload: amount
});
