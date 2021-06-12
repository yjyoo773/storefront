import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerReducer } from "react-router-redux";
import thunk from "redux-thunk";
import activeItem from "./products.js";
import activeCat from "./categories.js";
import theCart from "./cart.js";

let reducers = combineReducers({
  activeCat,
  activeItem,
  theCart,
  routing: routerReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
