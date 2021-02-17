import { FETCH_SHOPS, CREATE_SHOP } from "../actions/types";

const initialState = {
  shops: [],
  loading: true,
};

const ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOPS:
      return {
        ...state,
        shops: action.payload,
        loading: false,
      };

    case CREATE_SHOP:
      const { newShop } = action.payload;

      return {
        ...state,
        shops: [...state.shops, newShop],
      };
    default:
      return state;
  }
};
export default ShopReducer;
