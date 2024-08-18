import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { petUrl } from "../constant/constant";


export const petApi = createApi({
  reducerPath:'petApi',
  baseQuery:fetchBaseQuery({
    baseUrl:petUrl,
  }),
  endpoints:builder =>({
  addPets:builder.mutation({
    query:(query)=>({
   url:'/',
   method:'POST',
   body:query.body,
   headers:{
    authorization:query.token
   }
    })
  })
  })
})


export const { useAddPetsMutation } = petApi;