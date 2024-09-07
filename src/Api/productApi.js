import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productUrl } from "../constant/constant";


export const productApi = createApi({
  reducerPath:'productApi',
  baseQuery:fetchBaseQuery({
    baseUrl:productUrl,
  }),

  // addProduct
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

    // get all products
    getProduct:builder.query({
      query:()=>({
        url:'/',
        method:'GET',
      }),
      providesTags:['Product']
    }),

    //getProduct by id

    getProductById: builder.query({
      query: (query)=>({
        url:`/${query}`,
        method:'GET'
      }),
      providesTags:['Product']
    }),

// updateProduct
    updateProduct: builder.mutation({
      query:(query)=>({
        url:`/${query.id}`,
        method:'PUT',
        body:query.body,
        headers:{
          Authorization:query.token
        }
      }),
      invalidatesTags:['Product']
    }),


  removeProduct:builder.mutation({
    query:(query)=>({
      url:`/${query.id}`,
      method:'DELETE',
      headers:{
        Authorization:query.token
      }
    }),
    invalidatesTags:['Product']
  }),

    addReview :builder.mutation({
      query:(query)=>({
        url:`/review/${query.id}`,
        method:'PATCH',
        body:query.body,
        headers:{
          Authorization:query.token
        }
      }),
invalidatesTags:['Product']
    }),

    searchProduct:builder.query({
      query:(query)=>({
        url:'/',
        method:'GET',
        params:{
         search:query
        }
      }),
      providesTags:['Product']
    })

  })

})

export const { useAddProductsMutation,useGetProductQuery,useGetProductByIdQuery,useUpdateProductMutation,useAddReviewMutation,useRemoveProductMutation, useSearchProductQuery } = productApi;