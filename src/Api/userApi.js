
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userUrl } from "../constant/constant";






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

    updateUser: builders.mutation({
      query:(query)=>({
        url:`/profile/${query.id}`,
        method:'PATCH',
        body:query.body,
        headers:{
          Authorization:query.token
        }
      })

    })
  })
})

export const { useUserLoginMutation, useUserSignupMutation,useUpdateUserMutation } = userApi;