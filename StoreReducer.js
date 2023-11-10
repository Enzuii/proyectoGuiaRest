import { autoCompleteData } from "./data/autoCompleteData.js";
import { restaurantData } from "./data/restaurantData";
import { showData } from "./data/showData";
  
  const initialStore = () => {
    const store = {
        autoComplete: autoCompleteData,
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
            show: [...state.show, ...action.payload],
            restaurant: [...state.restaurant, ...action.payload],
            autoComplete: [...state.autoComplete, ...action.payload],
        };        
      default:
        return state;
    }
  };
  
  export { types };
  export { initialStore };
  export default storeReducer;