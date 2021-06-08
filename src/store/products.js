let list = [
  {
    name: "apple",
    category: "food",
    description: "a red apple",
    img: "https://images.unsplash.com/photo-1551445523-324a0fdab051?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFwcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 1.99,
    inventory: 99,
    active: false,
  },
  {
    name: "orange",
    category: "food",
    description: "an orange orange",
    img: "https://images.unsplash.com/photo-1547514701-42782101795e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 1.99,
    inventory: 99,
    active: false,
  },
  {
    name: "tv",
    category: "electronics",
    description: "a 72 inch full HD",
    img: "https://images.unsplash.com/photo-1542487354-feaf93476caa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRlbGV2aXNpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 499.99,
    inventory: 99,
    active: false,
  },
  {
    name: "iphone",
    category: "electronics",
    description: "the latest iphone",
    img: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 499.99,
    inventory: 99,
    active: false,
  },
];

export default (state = list, action) => {
  let { type, payload } = action;
  switch (type) {
    case "CHANGE_ACTIVE":
      let items = state.map((item) => {
        let temp = Object.assign({}, item);
        if (item.category === payload) {
          temp.active = true;

          return temp;
        } else {
          temp.active = false;
          return temp;
        }
      });
      return items;

    case "ADD_TO_CART":
      return state.map((item) => {
        if (item.name === payload.name) {
          return {
            name: item.name,
            category: item.category,
            description: item.description,
            img: item.img,
            price: item.price,
            active: item.active,
            inventory: item.inventory - 1,
          };
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

export const addCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};
