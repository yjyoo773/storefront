import superagent from "superagent";

let initalCategories = [];

let api = "https://ellis-api-server.herokuapp.com/category/";

export default (state = initalCategories, action) => {
  let { type, payload } = action;
  switch (type) {

    case "GET_CATEGORY":
      return payload

    case "CHANGE_ACTIVE":
      let categories = state.map((category) => {
        if (category.name === payload) {

          return { ...category, active: true };
        } else {
          return { ...category, active: false };
        }
      });
      return categories;

    default:
      return state;
  }
};

export const changeActive = (name) => {
  return {
    type: "CHANGE_ACTIVE",
    payload: name,
  };
};

export const getCategory = (data) => {
  return {
    type: "GET_CATEGORY",
    payload: data,
  };
};

export const getRemoteCategory = () => (dispatch) => {
  return superagent.get(api).then((res) => {
    dispatch(getCategory(res.body));
  });
};