import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
});

export default cartReducer.reducer;
export const { addItem, removeItem } = cartReducer.actions;
