import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,

} from "@material-tailwind/react";


 
import { imageUrl } from "../../constant/constant";
import { useLocation, useNavigate } from "react-router";
import { useGetProductQuery } from "../../Api/productApi";
import ProductPagination from "../product/ProductPagination";
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import NotGettingData from "../../ui/NotGettingData";
 
const Accessories =()=> {
  const [active, setActive] = useState(1)

  useEffect(()=>{
    return window.scrollTo(0,0)
  })
const location = useLocation();
  const isProductPage = location.pathname === '/accessories'
const {data,isLoading,error} = useGetProductQuery({page:active});
console.log(data);
const nav = useNavigate();

  return (
  

    <div className=' pb-8  '>
      {!error && <h1 className='font-bold text-4xl uppercase text-center pt-6 '>Accessories</h1> }
      
      {isLoading ? <LoadingPage/>: error?<NotGettingData/>:<div> <div className="mt-7 sm:ml-[5px] lg:ml-[25px] grid sm:grid-cols-2 lg:grid-cols-5 lg:gap-5 sm:gap-3">

{data?.data.map(({ _id, product_name, product_detail,product_category, product_image }) => {
  return  <Card className=" shadow-blue-gray-500/50 
hover:shadow-gray-700 sm:w-[190px] lg:w-[250px] lg:h-[350px]  bg-gray-100 shadow-2xl">
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
{isProductPage && <div className="lg:ml-[500px] p-4 mt-10">
<ProductPagination active={active} setActive={setActive}/>
</div> }</div>}
   

    </div>
 

    
  );
}

export default Accessories ;

