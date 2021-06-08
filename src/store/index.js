import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import activeItem from "./products.js";
import activeCat from "./categories.js";
import theCart from "./cart.js";

let reducers = combineReducers({ activeCat, activeItem, theCart });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
