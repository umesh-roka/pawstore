import { Button } from '@material-tailwind/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { imageUrl } from '../../constant/constant';
import { useFormik } from 'formik';
import {  clearAll, removeFromCart,} from '../../Slice/cartSlice';
import { useNavigate } from 'react-router';

const CartPage = () => {
  const nav = useNavigate();
 const dispatch = useDispatch();
const {carts} = useSelector((state)=>state.cartSlice);

const total = carts.reduce((a,b)=>a + b.qty * b.pet_price,0)

  const formik = useFormik({
    initialValues:{
      qty: 1,
    }
  })
  const removeCart = (_id)=>{
    dispatch(removeFromCart(_id))
  }
  const handleDelete = ()=>{
    dispatch(clearAll({}))
  }
 return (
    <div>
      {carts === 0 ? <h1>cart is empty </h1>:
      <div >
        <div className='ml-[20px] py-9'><Button color='red' onClick={()=>handleDelete()}>Clear All</Button></div>

        <div className='grid grid-cols-4 mx-[50px]'>

          {carts.map((cart)=>{
            return <div className='' key={cart._id}>
             <div><img className=' rounded-lg h-[200px] w-[200px]' src={`${imageUrl}${cart.pet_image}`} alt="" />
             <h1 className='ml-12'>Rs.{cart.pet_price}</h1>
             <h1>Total Price: {total}</h1>
             </div>

              
              <div> <select name='qty' defaultValue={cart.qty} onChange={(e)=>formik.setFieldValue('qty',e.target.value)}>
                      {[...Array(cart.countInStock).keys()].map((c)=>{
                        return <option key={c+1} value={c+1}>{c+1}</option>
                      })}
                    </select>
                    </div>
                    <div><Button onClick={()=>removeCart(cart._id)} color='red'>Delete</Button></div>
            </div>
           
          })

          }
        </div>
        <div className='ml-[200px] py-10' onClick={()=>nav('/orderpage')}><Button>Place an Order</Button> </div>
        
        </div>}
    </div>
  )
}

export default CartPage
