import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";


import { imageUrl } from '../../constant/constant';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';



const OrderPage = () => {

  const {carts} = useSelector((state)=>state.cartSlice);
  const total = carts.reduce((a,b)=>a + b.qty * b.pet_price,0)
  console.log(total);
    const formik = useFormik({
      initialValues:{
        qty: 1,
      }
    })

  return (
    <div>
    <div className='grid grid-cols-2 my-8'>
    
      <div>
      {carts === 0 ? <h1>cart is empty </h1>:
      <div >
        

        <div className='grid grid-cols-3 mx-[10px]'>

          {carts.map((cart)=>{
            return <div className='' key={cart._id}>
             <div><img className='rounded-lg h-[200px] w-[200px]' src={`${imageUrl}${cart.pet_image}`} alt="" />
             <h1 className='ml-12'>Rs.{cart.pet_price}</h1>
            
             </div>

              
              <div>{cart.qty}</div>
                   
            </div>
          })
          }
        </div>
       
        
        </div>}
    </div>
     



      <div>
      <Card color="transparent" className="flex justify-center items-center " shadow={false}>
  
  <Typography color="black" className="mt-1 uppercase font-bold text-2xl">
    Enter your details for order.
  </Typography>
  <form   className="mt-8 mb-2 w-[500px] max-w-screen-lg sm:w-96">
    <div className="mb-1 flex flex-col gap-6">

    <Typography variant="h6" color="blue-gray" className="-mb-3">
        Contact
      </Typography>
      <Input
      name="email"
      type='email'
        size="lg"
        placeholder="acb123@gmail.com"
        className=" !border-t-blue-gray-200 focus:!border-orange-700"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
     
      <Typography variant="h6" color="blue-gray" className="-mb-3">
        Your Full Name
      </Typography>
      <Input
      name="name"
        size="lg"
        placeholder="Full Name"
        className=" !border-t-blue-gray-200 focus:!border-orange-700"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />

<div className='flex'>
  <div className='flex flex-col'>
    <Typography variant="h6" color="blue-gray" className="-mb-3 pb-6">
        Select Your Provience
      </Typography>
      
      <Select label='Select Provience' placeholder="Select Provience" color='orange'
     >
        <Option>Koshi</Option>
        <Option>Madesh</Option>
        <Option>Bagmati</Option>
        <Option>Gandaki</Option>
        <Option>Lumbini</Option>
        <Option>Karnali</Option>
        <Option>Sudurpashchim</Option>

      </Select>
      </div>
  <div className='flex flex-col space-x-3'> 
     <Typography variant="h6" color="blue-gray" className="-mb-3 pb-6">
        Enter Your District
      </Typography>
      <Input
      name="district"
        size="lg"
        placeholder="eg:Pokhara"
        className=" w-[180px] !border-t-blue-gray-200 focus:!border-orange-700"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
      </div>
  <div className='flex flex-col'>
    <Typography variant="h6" color="blue-gray" className="-mb-3 pb-6">
        Enter Your Street
      </Typography>
      <Input
      name="street"
        size="lg"
        placeholder="eg:street name"
        className=" !border-t-blue-gray-200 focus:!border-orange-700"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
      </div>
</div>
<Typography variant="h6" color="blue-gray" className="-mb-3">
        Phone Number
      </Typography>
      <Input
      name="phone"
        size="lg"
        type='number'
        placeholder="phone number"
        className=" !border-t-blue-gray-200 focus:!border-orange-700"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </div>
    
    <Button type="submit" className="mt-6 uppercase" fullWidth>
     order now
    </Button>
   
  </form>
</Card>
      </div>
    </div>
    <h1 className='uppercase font-bold text-xl'>Total:{total}</h1>
   </div>
  )
}

export default OrderPage






