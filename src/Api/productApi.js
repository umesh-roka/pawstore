import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productUrl } from "../constant/constant";


export const productApi = createApi({
  reducerPath:'productApi',
  baseQuery:fetchBaseQuery({
    baseUrl:productUrl,
  }),

  endpoints:(builder)=>({
    addProducts: builder.mutation({
      query:(query)=>({
        url:'/',
        method:'POST',
        body:query.body,
        headers:{
          Authorization:query.token
        }

      }),
      invalidatesTags:['Product']
    }),

    getProduct:builder.query({
      query:()=>({
        url:'/',
        method:'GET',
      }),
      providesTags:['Product']
    }),

    getProductById: builder.query({
      query: (query)=>({
        url:`/${query}`,
        method:'GET'
      }),
      providesTags:['Product']
    })

  })

})

export const { useAddProductsMutation,useGetProductQuery,useGetProductByIdQuery } = productApi;