let cart = [];

export default (state = cart, action) => {
  let { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
        return [...state,payload]

    default:
        return state
  }
};

export const addCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload:item
  };
};

export const removeCart = (item) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: item,
  };
};
