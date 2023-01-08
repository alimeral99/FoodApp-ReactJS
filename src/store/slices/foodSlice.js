import { createSlice } from "@reduxjs/toolkit";

import foodData from "../../Data/Data";

export const foodSlice = createSlice({
  name: "food",
  initialState: {
    foodData: foodData,
    filter: null,
  },
  reducers: {
    searchFood(state, action) {
      state.filter = action.payload.id;
    },
    backFood(state, action) {
      state.filter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const selectAllFood = (state) => state.food.foodData;
export const { searchFood, backFood } = foodSlice.actions;
export default foodSlice.reducer;
