import { configureStore, createSlice } from "@reduxjs/toolkit";
import productData from "../components/data";

const initialState = productData;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    wished(state, action) {
      state.data[action.payload.index].wished = action.payload.state;
    },
    addToBag(state, action) {
      state.data[action.payload.index].bagged = action.payload.state;
    },
  },
});

const store = configureStore({
  reducer: { products: productSlice.reducer },
});

export const productActions = productSlice.actions;
export default store;
