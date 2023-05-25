import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../Data/productsData";
import { axiosClient } from "../../utils/axios/axios";
import { setLoading } from "./appConfigSlice";

import Swal from "sweetalert2";

export const getAllProducts = createAsyncThunk(
  "/api/v1/auth/products",
  async (body) => {
    try {
      let link = `/api/v1/products`;
      if (body?.category) {
        link = `/api/v1/products?category=${body.category}`;
      }
      const response = await axiosClient.get(link);
      return response.data;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
);

export const getProductDetail = createAsyncThunk(
  "/api/v1/product/:id",
  async (body) => {
    try {
      const response = await axiosClient.get(`/api/v1/product/${body.id}`);
      return response.data;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
);

export const getAdminProducts = createAsyncThunk(
  "/api/v1/admin/products",
  async (body) => {
    try {
      const response = await axiosClient.get("/api/v1/admin/products");
      return response.data;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
);

export const getAllCategories = createAsyncThunk(
  "/api/v1/categoires",
  async () => {
    try {
      const response = await axiosClient.get("/api/v1/categories");
      return response.data;
    } catch (e) {
      console.log(e);
      return Promise.reject(e.message);
    }
  }
);

//create Product
export const createProduct = createAsyncThunk(
  "/api/v1/product/admin/new",
  async (body, thunkAPI) => {
    try {
      console.log(body);
      const { data } = await axiosClient.post(
        "/api/v1/admin/product/new",
        body
      );
      console.log("This is created Product", data);
      return data;
    } catch (error) {
      return error;
    }
  }
);

//Delete Product
export const deleteProduct = createAsyncThunk(
  "/api/v1/product/admin/:id",
  async (body, thunkAPI) => {
    try {
      console.log(body);
      const { data } = await axiosClient.delete(
        `/api/v1/admin/product/${body.id}`
      );
      console.log("This is created Product", data);
      return data;
    } catch (error) {
      return error;
    }
  }
);

const productSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    success: false,
    message: "",
    error: false,
    isDeleted: false,
    categories: [],
    products: [],
    product: {},
    cartProduct: [],
    carts: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },

  reducers: {
    //Clear Error State
    resetStatusError: (state) => {
      state.error = "";
      state.success = false;
      state.message = "";
      state.isDeleted = false;
    },
    addToCart: (state, action) => {
      let { id } = action.payload;
      console.log("This is Payload", id);

      //check Existance
      let item = state.carts.find((item) => item._id == id);

      if (!item) {
        let arr = state.products.find((item) => item._id == id);
        let productIndex = state.products.findIndex((item) => item._id == id);
        if (productIndex > -1) {
          state.products[productIndex].isOnCard = true;
        }

        arr.quantity = 1;
        state.carts.push(arr);
        Swal.fire({
          title: "Success!",
          text: "Successfully added to your Cart",
          icon: "success",
          showConfirmButton: false,
          timer: 2500,
        });

        //Saving Carts To localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.carts));
      } else {
        Swal.fire({
          title: "Failed!",
          text: "This product is already added in your Cart",
          imageUrl: item.img,
          imageWidth: 200,
          imageAlt: item.title,
          showConfirmButton: false,
          timer: 5000,
        });
      }
    },

    //Update Cart
    updateCart: (state, action) => {
      let { val, id } = action.payload;
      state.carts.forEach((item) => {
        if (item._id == id) {
          if (val >= 1) {
            item.quantity = val;
          }
        }
      });

      localStorage.setItem("cartItems", JSON.stringify(state.carts));
    },

    // Remove Cart
    removeCart: (state, action) => {
      let { id } = action.payload;
      let arr = state.carts.filter((item) => item._id != id);
      console.log("Deleted ID", arr);
      state.carts = arr;
      localStorage.setItem("cartItems", JSON.stringify(state.carts));
      if (arr) {
        Swal.fire({
          title: "Success!",
          text: "Successfully Deleted From your Cart",
          icon: "success",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    },

    //Clear Cart
    clearCart: (state, action) => {
      state.carts = [];
      localStorage.setItem("cartItems", JSON.stringify([]));
      if (state.carts.length === 0) {
        Swal.fire({
          title: "Success!",
          text: "Successfully Clear your Cart",
          icon: "success",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    },

    //CartProduct
    cartProduct: (state, action) => {
      let { id } = action.payload;
      let arr = state.carts.find((item) => item._id === id);
      if (arr) {
        state.cartProduct.push(id);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.products = action.payload.result.products;
        }
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        if (action.payload?.statusCode === 200) {
          state.success = true;
          state.message = "Create Succesfully ";
        } else {
          state.error = action.payload?.message;
        }
      })
      .addCase(getAdminProducts.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.products = action.payload.result;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.isDeleted = true;
        } else {
          state.isDeleted = false;
          state.error = action.payload?.message;
        }
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.categories = action.payload.result;
        } else {
          state.error = action.payload?.message;
        }
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.product = action.payload.result;
        } else {
          state.error = action.payload?.message;
        }
      });
  },
});

export const productsReducer = productSlice.reducer;
export const { resetStatusError } = productSlice.actions;
export default productsReducer;
