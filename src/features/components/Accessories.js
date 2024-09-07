import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,

} from "@material-tailwind/react";


 
import { imageUrl } from "../../constant/constant";
import { useNavigate } from "react-router";
import { useGetProductQuery } from "../../Api/productApi";
 
const Accessories =()=> {

const {data,isLoading} = useGetProductQuery();
console.log(data);
const nav = useNavigate();
  return (
  

    <div className=' pb-8  '>
      <h1 className='font-bold text-4xl uppercase text-center pt-6 '>Accessories</h1>
    <div className="mt-7 sm:ml-[5px] lg:ml-[25px] grid sm:grid-cols-2 lg:grid-cols-5 lg:gap-5 sm:gap-3">

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
    </div>
 

    
  );
}

export default Accessories ;

