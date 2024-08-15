// import { createSlice } from "@reduxjs/toolkit";
// import { addUserToLocal, clearUser, getUserFormLocal } from "../shared/localstorage";

import { createSlice } from "@reduxjs/toolkit";
import { addUserToLocal, celarUser, getUserFromLocal } from "../shared/localstorage";


// export const userSlice = createSlice({
//   name:'userSlice',
//   initialState:{
//     user:getUserFormLocal()
//   },
//   reducers:{
// addUser:(state,action)=>{
// state.user = action.payload;
// addUserToLocal(state.user);
// },

// logoutUser:(state,action)=>{
//   state.user = null;
//   clearUser();
// }
//   }
// })

// export const {addUser,logoutUser} = userSlice.actions;



export const userSlice = createSlice({
  name:'userSlice',
  initialState:({
    user:getUserFromLocal(),
  }),
  reducers:{
    addUser:(state,action)=>{
      state.user = action.payload;
      addUserToLocal(state.user);
    },

    userLogout:(state,action)=>{

    state.user = null;
    celarUser();
    }

  }
})

export const {addUser,userLogout} = userSlice.actions;