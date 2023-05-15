import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appConfigSlice";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/user";
import categoryReducer from "./slices/categories";

export const store = configureStore({
  reducer: {
    app: appReducer,
    products: productReducer,
    user: userReducer,
    categories: categoryReducer,
  },
});
