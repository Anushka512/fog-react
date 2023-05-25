import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axios/axios";
import { setLoading } from "./appConfigSlice";

//Get All Orders
export const getCategories = createAsyncThunk(
  "/api/v1/admin/categories",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get("/api/v1/categories");
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
  }
);
//Create New Category
export const createNewCategory = createAsyncThunk(
  "/api/v1/add-cat",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      console.log("This is Body for Category Section ", body);
      const response = await axiosClient.post("/api/v1/add-cat", body);
      console.log("This is New Category", response);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

// Settings Slice
const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    error: "",
    success: false,
  },
  reducers: {
    setStatusResponse: (state, action) => {
      state.success = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        if (action.payload.statusCode == 200) {
          state.categories = action.payload.result;
        }
      })
      .addCase(createNewCategory.fulfilled, (state, action) => {
        if (action.payload?.statusCode == 200) {
          state.success = true;
        }
      });
  },
});

const categoryReducer = categorySlice.reducer;
export const { setStatusResponse } = categorySlice.actions;
export default categoryReducer;
