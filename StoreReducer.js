import { restaurantData } from "./data/restaurantData";
import { showData } from "./data/showData";

const initialStore = () => {
  const store = {
    show: showData,
    restaurant: restaurantData,
  };
  return store;
};

const types = {
  setProperty: "setProperty",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.setProperty:
      return {
        ...state,
        restaurant: state.restaurant.push(...action.payload),
        show: state.show.push(...action.payload),
      };
    default:
      return state;
  }
};

export { types };
export { initialStore };
export default storeReducer;