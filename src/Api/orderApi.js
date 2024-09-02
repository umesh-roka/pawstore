import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { orderUrl } from "../constant/constant";


export const orderApi = createApi({
  reducerPath:'orderApi',
  baseQuery:fetchBaseQuery({
    baseUrl:orderUrl
  }),
  endpoints:(builder)=>({
   placeOrder:builder.mutation({
    query:(query)=>({
      url:'/',
      method:'POST',
      body:query.body,
      headers:{
        Authorization:query.token
      }

    }),
    invalidatesTags:['Order']
   }),


   
   getAllorder:builder.query({
    query:(query)=>(
      {
        url:'/',
        method:'GET'
      }),
      providesTags:['Order']
   }),



   getOrderByUser:builder.query({
    query:(query)=>({
      url:`/user/${query.id}`,
      method:'GET',
      headers:{
        Authorization:query.token
      }
    }),
    providesTags:['Order']
   }),



   getOrderById: builder.query({
    query:(query)=>({
      url:`/${query.id}`,
      method:'GET',
      headers:{
        Authorization:query.token
      }
    }),
    providesTags:['Order']
   }),

  })
})


export const {usePlaceOrderMutation,useGetAllorderQuery,useGetOrderByIdQuery,useGetOrderByUserQuery} = orderApi;