import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productData: [],
    amount: 0,
    total: 0,
  },
  reducers: {
    addItem(state, action) {
      state.productData.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.productData = state.productData.filter(
        (item) => item.id !== itemId
      );
    },
    addSpesificAmount: (state, { payload }) => {
      const cartItem = state.productData.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.productData = state.productData.filter(
        (item) => item.id !== itemId
      );
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.productData.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { addItem, addSpesificAmount, removeItem, calculateTotals } =
  productSlice.actions;
export default productSlice.reducer;
export const selectProductData = (state) => state.product.productData;
