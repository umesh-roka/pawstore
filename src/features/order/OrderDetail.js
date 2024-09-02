
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { useGetOrderByIdQuery } from '../../Api/orderApi';
import { imageUrl } from '../../constant/constant';

const OrderDetail = () => {
  const {id} = useParams();
  const {user}= useSelector((state)=>state.userSlice);
  const {data,isLoading} = useGetOrderByIdQuery({
    id,
    token:user.token
  })
console.log(data)
  const order = data?.data;
  console.log(order)
 const detail = data?.data?.userDetail
 const address = order?.address
 console.log(address);
 
  return (
    <>
  <h1 className='uppercase text-center mt-2 underline font-bold text-2xl mb-[50px]'>Order Detail</h1>
   <div className='grid ml-[60px] lg:grid-cols-2 mb-6'>
    
    <div>
      <h1 className='uppercase font-bold text-2xl mt-[10px] mb-[20px]'>List of Items</h1>
      <div className='grid grid-cols-2'>
    {order?.items.map(({name,price,image,_id})=>{
          return <div key={_id}>
            <div> {<img className='h-[200px] w-[300px]' src ={`${imageUrl}${image}`}  alt='img'/>}</div>
         <div className='flex flex-col space-y-2'>
          <h1 className='mt-2'>Name:{name}</h1>
          <h1>Price:Rs.{price}</h1>
         </div>
            
          </div>
         })}
         </div>
    </div>
    <div className='ml-[200px] space-y-6 '>
      <h1 className='uppercase my-[10px] font-bold text-2xl'>UserDetail</h1>
      <h1>Email:{detail?.email}</h1>
      <h1>Name:{detail?.name}</h1>
      <h1>District:{address?.district}</h1>
      <h1>Street:{address?.street}</h1>
      <h1>Phone Number:{detail?.phone}</h1>
    </div>
        
            
        
        </div>
        </>
  )
}
     
   

export default OrderDetail


