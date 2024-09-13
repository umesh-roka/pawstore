import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Typography } from '@material-tailwind/react';
import { imageUrl } from '../../constant/constant';
import { useFormik } from 'formik';
import{addCart, updateCart} from '../../Slice/cartSlice'
import { useGetProductByIdQuery } from '../../Api/productApi';
import ProductReview from './ProductReview';
const ProductDetail = () => {
const { id } = useParams();
const {user} = useSelector((state)=>state.userSlice);
const {data,isLoading,isError,error} = useGetProductByIdQuery(id);
if(isLoading){
  return <div>loading...</div>
}

const product = data?.data;


  return (
    <div className='my-4'>
      
  <h1 className='font-bold text-4xl sm:ml-2 lg:ml-16 uppercase bg-orange-300 rounded-lg  w-fit px-2 py-1'>Product Detail</h1>
 <div className='grid sm:grid-cols-1 2xl:grid-cols-3 lg:mx-[50px] p-4 items-center gap-10'>

<div className="image">
  <img className='w-full h-[400px] rounded-xl' src={`${imageUrl}${product.product_image}`} alt="" />

</div>
<div className="info p-0  space-y-3 ">
<h1 className='font-bold text-3xl my-2 '>{product.product_name}</h1>

<p className='text-xl font-bold ' >Price: Rs.{product.product_price}</p>
<p className='text-xl font-bold' >Catogery: {product.category}
</p>
<div>
<p className='text-xl font-bold' >Detail </p>
<p className='text-xl text-justify' >{product.product_detail} </p>
</div>

</div>

{user === null ? <AddCart product={product} /> : (user.isAdmin ? '' : (product && <AddCart product={product} />))}

</div>
<div className='lg:ml-[50px]'><ProductReview reviews={product.reviews}/>
  </div> 
   </div>
  )
}

export default ProductDetail;





export const AddCart = ({ product }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
const {carts} = useSelector((state)=>state.cartSlice);
console.log(carts);

const isExist = carts.find((cart)=>cart._id === product._id);
  const formik = useFormik({
    initialValues:{
      qty:isExist?.qty || 1,
    }
  })
  console.log(isExist?.id);
const handleSubmit =()=>{
   
  if(isExist){
 return  <div>already</div> }
  else{
    dispatch(addCart({...product,qty:formik.values.qty}));
    nav('/cartpage');
  }
  
  

}
  return (
    <Card className="h-[200px] lg:mb-[150px] w-full overflow-scroll">
    <table>
    <thead>

          <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                 product Name
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                {product.product_name}
                </Typography>
              </th>
        
          </tr>
          <tr>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                 QTY
                </Typography>
              </th>

              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <div>
                    
                    <select name='qty' defaultValue={formik.values.qty} onChange={(e)=>formik.setFieldValue('qty',e.target.value)}>
                    {[...Array(product.countInStock).keys()].map((c)=>{
                        return <option key={c+1} value={c+1}>{c+1}</option>
                      })}
                    </select>
            </div>
              </th>
           
          </tr>
        </thead>
    </table>
      <div className='flex justify-center sm:pb-3 pt-7'>
        <Button onClick={handleSubmit}>Add To Cart</Button>
      </div>
    </Card>
  )
}