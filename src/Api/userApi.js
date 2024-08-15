// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { userUrl } from "../constant/constant";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userUrl } from "../constant/constant";



// export const userApi = createApi({
//   reducerPath:'userApi',
//   baseQuery:fetchBaseQuery({
//     baseUrl:userUrl,
//   }),

// endpoints:(builder)=>({

//   userLogin:builder.mutation({
//     query:(query)=>({
//       url:'/login',
//       method:'POST',
//       body:query,
//     })
//   }),

//   userSigunup:builder.mutation({
//     query:(query)=>({
//       url:'/signup',
//       method:'POST',
//       body:query
//     })
//   }),
// })

// })


// export const { useUserSigunupMutation, useUserLoginMutation } = userApi;







export const userApi = createApi({
  reducerPath:'userAipi',
  baseQuery:fetchBaseQuery({
    baseUrl:userUrl,
  }),
  endpoints:builders=>({
    userLogin:builders.mutation({
      query:(query)=>({
        url:'/login',
        method:'POST',
        body:query
      })
    }),
    
    userSignup:builders.mutation({
      query:(query)=>({
        url:'/signup',
        method:'POST',
        body:query
      })
    }),
  })
})

export const { useUserLoginMutation, useUserSignupMutation } = userApi;