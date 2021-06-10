import superagent from "superagent";

let list = [];

let api = "https://ellis-api-server.herokuapp.com//product";

export default (state = list, action) => {
  let { type, payload } = action;
  switch (type) {
    case "GET_PRODUCTS":
      return payload;

    case "CHANGE_ACTIVE":
      let items = state.map((item) => {
        if (item.category === payload) {
          return { ...item, active: true };
        } else {
          return { ...item, active: false };
        }
      });
      return items;

    case "ADD_TO_CART":
      return state.map((item) => {
        if (item.name === payload.name) {
          return { ...item, inventory: item.inventory - 1 };
        }
        return item;
      });

    case "REMOVE_FROM_CART":
      return state.map((item) => {
        if (item.name === payload.name) {
          return { ...item, inventory: item.inventory + 1 };
        }
        return item;
      });
    default:
      return state;
  }
};

export const isActive = (category) => {
  return {
    type: "CHANGE_ACTIVE",
    payload: category,
  };
};

export const getProducts = (data) => {
  return {
    type: "GET_PRODUCTS",
    payload: data,
  };
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

export const getRemoteProducts = () => (dispatch) => {
  return superagent.get(api).then((res) => {
    dispatch(getProducts(res.body));
  });
};

export const addRemoteCart = (data) => async (dispatch) => {
  let res = await superagent.put(`${api}/${data._id}`).send(data);
  dispatch(addCart(res.body));
};

export const removeRemoteCart = (data) => async (dispatch) => {
  let res = await superagent.put(`${api}/${data._id}`).send(data);
  dispatch(removeCart(res.body));
};
