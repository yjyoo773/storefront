let initalCategories = [
  {
    name: "food",
    displayName: "food",
    description: "something",
    active: false,
  },
  {
    name: "electronics",
    displayName: "electronics",
    description: "something",
    active: false,
  },
];

export default (state = initalCategories, action) => {
  let { type, payload } = action;
  switch (type) {
    case "CHANGE_ACTIVE":
      let categories = state.map((category) => {
        // let temp = Object.assign({}, category);
        if (category.name === payload) {
          // temp.active = true;
          // return temp;
          return {...category,active:true};

        } else {
          // temp.active = false;
          // return temp;
          return {...category,active:false};

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
