import { Button } from '@material-tailwind/react';
import React from 'react'
import { useSelector } from 'react-redux'
import { imageUrl } from '../../constant/constant';
import { useFormik } from 'formik';

const CartPage = () => {
 
const {carts} = useSelector((state)=>state.cartSlice);
console.log(carts);
const total = carts.reduce((a,b)=>a + b.qty * b.pet_price,0)
console.log(total);
  const formik = useFormik({
    initialValues:{
      qty: 1,
    }
  })
 return (
    <div>
      {carts === 0 ? <h1>cart is empty </h1>:
      <div >
        <div className=''>
          {carts.map((cart)=>{
            return <div className='grid grid-cols-3' key={cart._id}>
             <div><img className='h-[400px]' src={`${imageUrl}${cart.pet_image}`} alt="" />
             <h1 className='ml-12'>Rs.{cart.pet_price}</h1>
             <h1>Total Price: {total}</h1>
             </div>

              
              <div> <select name='qty' value={carts.values.qty} onChange={(e)=>formik.setFieldValue('qty',e.target.value)}>
                      {[...Array(cart.countInStock).keys()].map((c)=>{
                        return <option key={c+1} value={c+1}>{c+1}</option>
                      })}
                    </select></div>
            </div>
           
          })

          }
        </div>
        <div className='ml-28 py-10'><Button>Place an Order</Button> </div>
        
        </div>}
    </div>
  )
}

export default CartPage
