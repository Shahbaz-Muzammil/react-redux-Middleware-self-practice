import Product from "../models/Product";
import { SET_PRODUCTS, SET_USER } from "../types/products.types";

export const productsInitialState = [];
const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [...action.payload];
     
    default:
      return state;
  }
};

export default productsReducer;
