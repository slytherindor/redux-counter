import { bindActionCreators, createStore } from 'redux';
import { reducer } from './reducers';
import { increment, decrement, set } from './actions';

export const store = createStore(reducer);

bindActionCreators({ increment, decrement, set }, store.dispatch);
