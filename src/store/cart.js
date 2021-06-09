import superagent from "superagent";
let api = "http://localhost:3333/product";

let cart = [];

export default (state = cart, action) => {
  let { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return [...state, payload];
      
      case "REMOVE_FROM_CART":
        let index = state.indexOf(payload);
        console.log('remove Cart =',state)
      let items = [...state.slice(0, index), ...state.slice(index + 1)];
      return items;

    default:
      return state;
  }
};

export const addCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const removeCart = (item) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: item,
  };
};

export const removeRemoteCart = (data) => async (dispatch) => {
  let res = await superagent.put(`${api}/${data._id}`).send(data);
  dispatch(removeCart(data));
};
