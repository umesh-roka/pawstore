import React from 'react'
import { useSearchProductQuery } from '../../Api/productApi';
import { useNavigate, useParams } from 'react-router';
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { imageUrl } from '../../constant/constant';

const SearchProduct = () => {
  const nav = useNavigate();
  const {query} = useParams();
  const {data} = useSearchProductQuery(query);

  console.log(data);
  return (

  <div className='pb-8 '>
  <h1 className='font-bold text-4xl uppercase text-center pt-6 '>Searched Item</h1>
<div className="mt-7 sm:ml-[5px] lg:ml-[25px] grid sm:grid-cols-2 lg:grid-cols-5 lg:gap-5 sm:gap-3">

  {data?.data.map(({ _id, product_name, product_detail,product_category, product_image }) => {
    return  <Card className=" shadow-2xl shadow-blue-gray-500/50 
    hover:shadow-orange-200 sm:w-[190px] lg:w-[250px] lg:h-[350px]  bg-gray-100 ">
    <CardHeader floated={false} color="blue-gray">
      <img
      className="lg:h-[150px] lg:w-full"
        src={`${imageUrl}${product_image}`}
        alt="ui/ux review check"
      />
    </CardHeader>
    <CardBody>
        <Typography className=" font-bold text-lg">
          {product_name}
        </Typography>
        <Typography className='truncate'>
          {product_category}
        </Typography>
        <Typography className='truncate'>
          {product_detail}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0  sm:text-sm">
        <button className=' bg-black text-white px-4 py-1 rounded-lg sm:text-sm font-bold' onClick={() => nav(`/productdetail/${_id}`)}>More</button>
      </CardFooter>

  </Card>
  
  })}


</div>
</div>

  )
}

export default SearchProduct
