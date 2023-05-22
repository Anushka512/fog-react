import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { ProductData } from "../../Data/productsData";
import { axiosClient } from "../../utils/axios/axios";
// import { setLoading } from "./appConfigSlice";
import Swal from "sweetalert2";
// import { positions, Provider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
// import axios from "axios";
import "./product.css";

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

export const getAdminProducts = createAsyncThunk(
  "/api/v1/admin/products",
  async (body) => {
    try {
      const response = await axiosClient.get("/api/v1/admin/products");
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
      state.isDeleted = false;
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
        // Swal.fire({
        //   title: "Success!",
        //   text: "Successfully added to your Cart",
        //   icon: "success",
        //   imageWidth: 200,
        //   width: '450px',
        //   // height: '50px', 
        //   showConfirmButton: false,
        //   timer: 1000,
        //   position: "bottom-end"
        // });
        Swal.fire({
          title: "Success!",
          text: "Successfully added to your Cart",
          icon: "success",
          width: '300px',
          showConfirmButton: false,
          timer: 1500,
          position: "bottom-end",
          customClass: {
            popup: 'custom-popup',
            closeButton: 'custom-close-button',
          },
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          showCloseButton: true,
          closeButtonHtml: '&times;', // Custom HTML for the close button (uses the "times" symbol)
        });

     

        //Saving Carts To localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.carts));
      } else {
        Swal.fire({
          title: "Failed!",
          text: "This product is already added in your Cart",
          icon: "failed",
          imageWidth: 200,
          width: '450px',
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          showCloseButton: true,
          closeButtonHtml: '&times;', 
          customClass: {
            closeButton: 'custom-close-button',
          },
          imageAlt: item.title,
          showConfirmButton: false,
          timer: 1500,
          position: "bottom-end"
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
          width: '450px',
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          showCloseButton: true,
          closeButtonHtml: '&times;', 
          customClass: {
            popup: 'custom-popup',
            closeButton: 'custom-close-button',
          },
          timer: 1500,
          position: "bottom-end"
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
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          showCloseButton: true,
          closeButtonHtml: '&times;', 
          customClass: {
            popup: 'custom-popup',
            closeButton: 'custom-close-button',
          },
          width: '450px',
          showConfirmButton: false,
          timer: 1500,
          position: "bottom-end"
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
      });
  },
});

export const productsReducer = productSlice.reducer;
export const { resetStatusError } = productSlice.actions;
export default productsReducer;
