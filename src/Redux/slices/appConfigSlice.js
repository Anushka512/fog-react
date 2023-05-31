import {createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfigSlice",
  initialState: {
    isLoading: false,
    isCartOpen: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
  },
});

export default appConfigSlice.reducer;

export const { setLoading, setCartOpen } = appConfigSlice.actions;
