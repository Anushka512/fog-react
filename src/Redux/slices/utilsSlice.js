import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axios/axios";
import { setLoading } from "./appConfigSlice";

//Get All Orders
export const getAllPincodes = createAsyncThunk(
  "/api/v1/admin/pincodes",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get("/api/v1/util/pincodes");
      console.log(response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
  }
);
//Get All Orders
export const createPincode = createAsyncThunk(
  "/api/v1/admin/pincodes/create",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.post(
        "/api/v1/util/pincode/create",
        body
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const createAndUpdateHeader = createAsyncThunk(
  "/api/v1/admin/util/header",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.post("/api/v1/util/header", body);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);
export const getHeaderTagLine = createAsyncThunk(
  "/api/v1/admin/util/get/header",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.get("/api/v1/util/header", body);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

// Settings Slice
const utilSLice = createSlice({
  name: "utils",
  initialState: {
    pincodes: [],
    error: "",
    success: false,
    headerTagLine: "",
  },
  reducers: {
    setStatusResponse: (state, action) => {
      state.success = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPincodes.fulfilled, (state, action) => {
        if (action.payload.statusCode == 200) {
          state.pincodes = action.payload.result;
        }
      })
      .addCase(createPincode.fulfilled, (state, action) => {
        if (action.payload?.statusCode == 201) {
          state.success = true;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(createAndUpdateHeader.fulfilled, (state, action) => {
        if (action.payload?.statusCode == 201) {
          state.success = true;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(getHeaderTagLine.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.headerTagLine = action.payload.result;
        }
      });
  },
});

export default utilSLice.reducer;
export const { setStatusResponse } = utilSLice.actions;
