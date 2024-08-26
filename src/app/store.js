
import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../Api/userApi";
import { userSlice } from "../Slice/userSlice";
import { petApi } from "../Api/petApi";
import { cartSlice } from "../Slice/cartSlice";



export const store = configureStore({
  reducer:{
    [cartSlice.name]:cartSlice.reducer,
    [userSlice.name]:userSlice.reducer,
    [userApi.reducerPath]:userApi.reducer,
    [petApi.reducerPath]:petApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([
    userApi.middleware,
    petApi.middleware,
  ])
})


