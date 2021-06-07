
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import activeItem from './products.js';
import activeCat from "./categories.js";

let reducers = combineReducers({ activeCat, activeItem });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();