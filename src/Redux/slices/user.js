import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Axios
import { axiosClient } from "../../utils/axios/axios";
import Swal from "sweetalert2";

export const getLoggedInrUser = createAsyncThunk(
  "/api/v1/auth/login",
  async (body) => {
    try {
      const response = await axiosClient.post("/api/v1/auth/login", body);
      console.log("This is Loggin Data", response);
      return response.data;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
);

export const createUser = createAsyncThunk(
  "/api/v1/auth/register",
  async (body) => {
    try {
      console.log("This is bOdy", body);
      const response = await axiosClient.post("/api/v1/auth/register", body);
      console.log("This is Response from our APi", response);
      return response.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

//Get All User (admin)

export const getAllUsers = createAsyncThunk("/api/v1/admin/users", async () => {
  try {
    const response = await axiosClient.get("/api/v1/admin/users");
    console.log("This is Response from our APi", response);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
});

// User Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    status: false,
    user: {},
    isAuthenticated: false,
    error: null,
    addresses: localStorage.getItem("glutenUserAddress")
      ? JSON.parse(localStorage.getItem("glutenUserAddress"))
      : [],
  },

  reducers: {
    createAddress: (state, action) => {
      const { name, title, address, HNO } = action.payload;
      state.addresses.push({ name, title, address, HNO });
      localStorage.setItem(
        "glutenUserAddress",
        JSON.stringify(state.addresses)
      );
      Swal.fire({
        title: "Success!",
        text: "Successfully added Address",
        icon: "success",
        showConfirmButton: false,
        timer: 2500,
      });
    },

    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.user = action.payload.user;
          state.status = true;
        } else {
          state.error = action.payload.error ? "Error" : action.payload.error;
        }
      })
      .addCase(getLoggedInrUser.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.user = action.payload.user;
          state.isAuthenticated = true;
          state.status = true;
        }

        if (action.payload.statusCode === 401) {
          state.error = action.payload.message;
        }
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.allUsers = action.payload.result;
        }
      });
  },
});

const userReducer = userSlice.reducer;
export default userReducer;
