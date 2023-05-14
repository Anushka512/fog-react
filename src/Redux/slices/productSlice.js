import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../Data/productsData";
import { axiosClient } from "../../utils/axios/axios";
import { setLoading } from "./appConfigSlice";

import Swal from "sweetalert2";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "/api/v1/auth/products",
  async (body) => {
    try {
      const response = await axiosClient.get("/api/v1/products");
      console.log("This is Product Data", response);
      return response.data;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
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
        "http://localhost:4000/api/v1/admin/product/new",
        body
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
    products: [],
    carts: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [
          {
            id: 2,
            labels: "45% OFF",
            category: "fashion",
            // img: img2,
            hover_img: "img",
            title: "T-Shirt For Men",
            price: 72,
            description: `Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.`,
            quantity: 1,
          },
        ],
  },

  reducers: {
    //Clear Error State
    resetStatusError: (state) => {
      state.error = "";
      state.success = false;
      state.message = "";
    },
    addToCart: (state, action) => {
      let { id } = action.payload;
      console.log("This is Payload", id);

      //check Existance
      let item = state.carts.find((item) => item._id == id);

      if (!item) {
        let arr = state.products.find((item) => item._id == id);
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.products = action.payload.result;
        }
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        if (action.payload?.statusCode === 200) {
          state.success = true;
          state.message = "Create Succesfully ";
        } else {
          state.error = action.payload?.message;
        }
      });
  },
});

export const productsReducer = productSlice.reducer;
export const { resetStatusError } = productSlice.actions;
export default productsReducer;
