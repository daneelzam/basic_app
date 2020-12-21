import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const preloadedState = window.localStorage.getItem('state') || '{"isAuth": false, "user": {"email": "", "username": ""}}';

const store = createStore(reducer, JSON.parse(preloadedState), composeWithDevTools());

store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem('state', JSON.stringify(state));
});

export default store;
