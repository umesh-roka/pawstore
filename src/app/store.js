// import { configureStore } from "@reduxjs/toolkit";
// import { userApi } from "../Api/userApi";
// import { userSlice } from "../Slice/userSlice";

import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../Api/userApi";



// export const store = configureStore({
//   reducer:{
//     [userSlice.name]:userSlice.reducer,
//     [userApi.reducerPath]:userApi.reducer,
//   },
//   middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([
//     userApi.middleware,
//   ])
// })


 export const store = configureStore({
  reducer:{
    [userApi.reducerPath]:userApi.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([
    userApi.middleware
  ])

  
})