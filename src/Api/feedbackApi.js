import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { feedbackUrl } from "../constant/constant";



export const feedbackApi = createApi({
  reducerPath:'feedbackApi',
  baseQuery:fetchBaseQuery({
    baseUrl:feedbackUrl
  }),

  endpoints:(builder)=>({

getFeedBack:builder.query({
  query:(query)=>({
    url:'/',
    method:'GET'
  })

}),

    addFeedBack:builder.mutation({
      query:(query)=>({
        url:'/',
        method:'POST',
        body:query
      }),
      invalidatesTags:['Feedback']
    }),

  
  
  })
})

export const { useGetFeedBackQuery, useAddFeedBackMutation} = feedbackApi;