
import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../Api/userApi";
import { userSlice } from "../Slice/userSlice";
import { petApi } from "../Api/petApi";
import { cartSlice } from "../Slice/cartSlice";
import { productApi } from "../Api/productApi";



export const store = configureStore({
  reducer:{
    [cartSlice.name]:cartSlice.reducer,
    [userSlice.name]:userSlice.reducer,
    [userApi.reducerPath]:userApi.reducer,
    [petApi.reducerPath]:petApi.reducer,
    [productApi.reducerPath]:productApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([
    userApi.middleware,
    petApi.middleware,
    productApi.middleware,
  ])
})


