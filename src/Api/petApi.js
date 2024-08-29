import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { petUrl } from "../constant/constant";


export const petApi = createApi({
  reducerPath:'petApi',
  baseQuery:fetchBaseQuery({
    baseUrl:petUrl,
  }),

  // adding pet 
  endpoints:(builder) =>({
  addPets:builder.mutation({
    query:(query)=>({
   url:'/',
   method:'POST',
   body:query.body,
   headers:{
    Authorization:query.token
   }
    }),
    invalidatesTags:['Pet']

  }),


  // getting all Pets
  getPets:builder.query({
    query:()=>({
      url:'/',
      method:'GET',
    
    }),
    providesTags:['Pet']
  }),

// getting pet by Id
  getPetById:builder.query({
    query:(query)=>({
      url:`/${query}`,
      method:'GET'
    }),
    providesTags:['Pet']

  }),


  // update pet

  updatePet: builder.mutation({
    query: (query) => ({
      url: `/${query.id}`,
      body: query.body,
      method: 'PUT',
      headers: {
        Authorization: query.token
      }
    }),
    invalidatesTags: ['Pet']
  }),





  // removePet
  removePet:builder.mutation({
    query:(query)=>({
      url:`/${query.id}`,
      method:'DELETE',
      params:{
        imagePath:query.imagePath,
      },
      headers:{
        Authorization:query.token
      }
    }),
    invalidatesTags:['Pet']
  })

  })
})



export const { useAddPetsMutation, useGetPetsQuery,useGetPetByIdQuery,useRemovePetMutation,useUpdatePetMutation } = petApi;