import { restaurantData } from "./data/restaurantData";
import { showData } from "./data/showData";
import { showRestaurantData } from "./data/showRestaurantData";

const initialStore = () => {
  const store = {
    show: showData,
    restaurant: restaurantData,
    showRestaurant: showRestaurantData,
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
        showRestaurant: state.showRestaurant.push(...action.payload),
      };
    default:
      return state;
  }
};

export { types };
export { initialStore };
export default storeReducer;