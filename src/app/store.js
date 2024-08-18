
import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../Api/userApi";
import { userSlice } from "../Slice/userSlice";
import { petApi } from "../Api/petApi";



export const store = configureStore({
  reducer:{
    [userSlice.name]:userSlice.reducer,
    [userApi.reducerPath]:userApi.reducer,
    [petApi.reducerPath]:petApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([
    userApi.middleware,
    petApi.middleware,
  ])
})


