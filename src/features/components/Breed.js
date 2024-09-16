
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import { useGetPetsQuery } from "../../Api/petApi";
import { imageUrl } from "../../constant/constant";
import { useLocation, useNavigate } from "react-router";
import PetPagination from '../pets/PetPagination';
import LoadingPage from './LoadingPage';
import NotGettingData from '../../ui/NotGettingData';


const Breed = () => {
  const [active,setActive] = useState(1)
  useEffect(()=>{
    return window.scrollTo(0,0)
  })

  const location = useLocation()
   const isBreedPage = location.pathname === '/pets'
  const { data, isLoading,error } = useGetPetsQuery({page:active});
  const [selectedCategory, setSelectedCategory] = useState('All'); // State for selected category
  const nav = useNavigate();

  // Filter pets based on the selected category
  const filteredPets = selectedCategory === 'All'
    ? data?.data
    : data?.data.filter(pet => pet.pet_category === selectedCategory);

  // Extract unique categories for filtering options
  const categories = ['All', ...new Set(data?.data.map(pet => pet.pet_category))];


  return (
    <div className=' pb-8'>
      {!error && <h1 className='font-bold text-4xl uppercase py-6 text-center pt-6'>Pets</h1>}

      {/* Category filter options */}
      {isBreedPage && (<div className='text-center mb-4'>
        {categories.map(category => (
          <button
            key={category}
            className={`mx-2 px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-orange-400 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>)}
      
      {isLoading ? <LoadingPage/> : error ? <NotGettingData/> :
       <div className="mt-7  sm:ml-[5px] lg:ml-[25px] grid sm:grid-cols-2 lg:grid-cols-5 lg:gap-5 sm:gap-3">
       {(
         filteredPets.map(({ _id, pet_name, pet_detail, pet_category, pet_image }) => (
            <Card key={_id} className="sm:w-[190px] 
           shadow-2xl shadow-blue-gray-500/50
            hover:shadow-orange-200 lg:w-[250px] lg:h-[350px] bg-orange-100 ">
             <CardHeader floated={false} color="blue-gray">
               <img
                 className="lg:h-[150px] lg:w-full"
                 src={`${imageUrl}${pet_image}`}
                 alt={pet_name}
               />
             </CardHeader>
             <CardBody>
               <Typography className="font-bold text-lg">
                 {pet_name}
               </Typography>
               <Typography className='truncate'>
                 {pet_category}
               </Typography>
               <Typography className='truncate'>
                 {pet_detail}
               </Typography>
             </CardBody>
             <CardFooter className="pt-0 sm:text-sm">
               <button
                 className='bg-black text-white px-4 py-1 rounded-lg sm:text-sm font-bold'
                 onClick={() => nav(`/petdetail/${_id}`)}
               >
                 More
               </button>
             </CardFooter>
           </Card>
         ))
       )}
     </div>}

     
     
        {isBreedPage && <div className='lg:ml-[500px] mt-10 p-4'><PetPagination data ={data} active={active} setActive={setActive}/>
      </div> }
     
    </div>
  );
}

export default Breed;
