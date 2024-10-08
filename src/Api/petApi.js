import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { petUrl } from "../constant/constant";


export const petApi = createApi({
  reducerPath:'petApi',
  baseQuery:fetchBaseQuery({
    baseUrl:petUrl,
  }),

  
  endpoints:(builder) =>({

getTopPet:builder.query({
query:(query)=>({
  url:'/top-pet',
  method:'GET',
}),
providesTags:['Pet']
}),

// adding pet 
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
    query:(query)=>({
      url:'/',
      method:'GET',
      params:{
        page:query?.page
      }
    
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


  addReview:builder.mutation({
  query:(query)=>({
    url:`review/${query.id}`,
    method:'PATCH',
    body:query.body,
    headers:{
      Authorization:query.token
    }
  }),
  invalidatesTags:['pet']
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
  }),

  
searchPet:builder.query({
  query:(query)=>({
    url:'/',
    method:'GET',
    params:{
      search:query
    }
  }),
  providesTags:['Pet']

})

  })
})



export const {useGetTopPetQuery, useAddPetsMutation, useGetPetsQuery,useGetPetByIdQuery,useRemovePetMutation,useUpdatePetMutation,useAddReviewMutation,useSearchPetQuery } = petApi;