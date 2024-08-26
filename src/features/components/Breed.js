// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   CardFooter,

// } from "@material-tailwind/react";

// import {
//   Button,
//   Tooltip,
//   IconButton,
// } from "@material-tailwind/react";
 
// import { useGetPetsQuery } from "../../Api/petApi";
// import { imageUrl } from "../../constant/constant";
// import { useNavigate } from "react-router";
 
// const Breed=()=> {

// const {data,isLoading} = useGetPetsQuery();
// console.log(data);
// const nav = useNavigate();
//   return (
  

//     <div className='bg-gray-100 pb-8 '>
//       <h1 className='font-bold text-4xl uppercase text-center pt-6 '>All Pets</h1>
//     <div className="mt-7 sm:ml-[5px] lg:ml-[25px] grid sm:grid-cols-2 lg:grid-cols-5 lg:gap-5 sm:gap-3">

//       {data?.data.map(({ _id, pet_name, pet_detail,pet_category, pet_image }) => {
//         return  <Card className=" sm:w-[190px] lg:w-[250px] lg:h-[350px]  bg-orange-100 shadow-lg">
//         <CardHeader floated={false} color="blue-gray">
//           <img
//           className="lg:h-[150px] lg:w-full"
//             src={`${imageUrl}${pet_image}`}
//             alt="ui/ux review check"
//           />
//         </CardHeader>
//         <CardBody>
//             <Typography className=" font-bold text-lg">
//               {pet_name}
//             </Typography>
//             <Typography className='truncate'>
//               {pet_category}
//             </Typography>
//             <Typography className='truncate'>
//               {pet_detail}
//             </Typography>
//           </CardBody>
//           <CardFooter className="pt-0  sm:text-sm">
//             <button className=' bg-black text-white px-4 py-1 rounded-lg sm:text-sm font-bold' onClick={() => nav(`/petdetail/${_id}`)}>More</button>
//           </CardFooter>
    
//       </Card>
      
//       })}


// </div>
//     </div>
 

    
//   );
// }

// export default Breed;




import React, { useState } from 'react';
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

const Breed = () => {
  const location = useLocation()
   const isBreedPage = location.pathname === '/breed'
  const { data, isLoading } = useGetPetsQuery();
  const [selectedCategory, setSelectedCategory] = useState('All'); // State for selected category
  const nav = useNavigate();

  // Filter pets based on the selected category
  const filteredPets = selectedCategory === 'All'
    ? data?.data
    : data?.data.filter(pet => pet.pet_category === selectedCategory);

  // Extract unique categories for filtering options
  const categories = ['All', ...new Set(data?.data.map(pet => pet.pet_category))];


  return (
    <div className='bg-gray-100 pb-8'>
      <h1 className='font-bold text-4xl uppercase py-6 text-center pt-6'>Pets</h1>

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
      

      <div className="mt-7 sm:ml-[5px] lg:ml-[25px] grid sm:grid-cols-2 lg:grid-cols-5 lg:gap-5 sm:gap-3">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          filteredPets.map(({ _id, pet_name, pet_detail, pet_category, pet_image }) => (
            <Card key={_id} className="sm:w-[190px] lg:w-[250px] lg:h-[350px] bg-orange-100 shadow-lg">
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
      </div>
    </div>
  );
}

export default Breed;
