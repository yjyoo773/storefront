import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import activeItem from "./products.js";
import activeCat from "./categories.js";
import theCart from "./cart.js";

let reducers = combineReducers({ activeCat, activeItem, theCart });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
