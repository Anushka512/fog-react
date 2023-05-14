import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    isLoading: false,
  },
  reducer: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default appConfigSlice.reducer;
export const { setLoading } = appConfigSlice.actions;