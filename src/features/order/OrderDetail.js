
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
  const detail = order.userDetail;
  console.log(detail)
 
  return (
   <div>
         {order?.items.map(({name,_id})=>{
          return <div key={_id}>
            {name}
          </div>
         })}
            
            <h1>{detail.email}</h1>
        </div>

  )
}
     
   

export default OrderDetail


