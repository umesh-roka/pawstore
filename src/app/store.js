
import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../Api/userApi";
import { userSlice } from "../Slice/userSlice";
import { petApi } from "../Api/petApi";
import { cartSlice } from "../Slice/cartSlice";
import { productApi } from "../Api/productApi";
import { orderApi } from "../Api/orderApi";
import { feedbackApi } from "../Api/feedbackApi";



export const store = configureStore({
  reducer:{
    [cartSlice.name]:cartSlice.reducer,
    [userSlice.name]:userSlice.reducer,
    [userApi.reducerPath]:userApi.reducer,
    [petApi.reducerPath]:petApi.reducer,
    [productApi.reducerPath]:productApi.reducer,
    [orderApi.reducerPath]:orderApi.reducer,
    [feedbackApi.reducerPath]:feedbackApi.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([
    userApi.middleware,
    petApi.middleware,
    productApi.middleware,
    orderApi.middleware,
    feedbackApi.middleware
  ])
})


