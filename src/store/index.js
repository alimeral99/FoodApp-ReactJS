import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./slices/foodSlice";
import productReducer from "./slices/productSlice";
const store = configureStore({
  reducer: {
    food: foodReducer,
    product: productReducer,
  },
});

export default store;
