import React from 'react';
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
import { usePlaceOrderMutation } from '../../Api/orderApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const OrderPage = () => {
  const { carts } = useSelector((state) => state.cartSlice);
  const { user } = useSelector((state) => state.userSlice);

  // Calculate the total price for all items in the cart
  const total = carts.reduce((a, b) => a + b.qty * (b.pet_price || b.product_price), 0);

  const [placeOrder] = usePlaceOrderMutation(); 
const nav = useNavigate();
  const { handleSubmit, handleChange, values, setFieldValue } = useFormik({
    initialValues: {
   
      email: user.email || '',
      name: user.username || '',
      province: '',
      district: '',
      street: '',
      phone: '',
    },
    onSubmit: async (val) => {
     
      try {
        const order = {
          userDetail: {
            email: val.email,
            name: val.name,
            phone: val.phone,
          },
          address: {
            province: val.province,
            district: val.district,
            street: val.street
          },
          items: carts.map(cart => ({
            name: cart.pet_name || cart.product_name,
            price: cart.pet_price || cart.product_price,
            qty: cart.qty,
            image: cart.pet_image || cart.product_image
          })),
          total
        };

        await placeOrder({body:order,token:user.token}).unwrap(); // Trigger the mutation and unwrap the response
          toast.success('ordered successfully')
          nav('/userorder')
      } catch (error) {
        toast.error('something gets wrong');
      }
    },
  });

  return (
    <div>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 my-8'>
        <div>
          {carts.length === 0 ? (
            <h1>Cart is empty</h1>
          ) : (
            <div>
              <div className='grid grid-cols-3 mx-[10px]'>
                {carts.map((cart) => (
                  <div className='' key={cart._id}>
                    <div>
                      {cart.pet_image ? (
                        <div>
                          <img className='rounded-lg h-[200px] w-[200px]' src={`${imageUrl}${cart.pet_image}`} alt="" />
                          <h1 className='font-bold text-xl'>{cart.pet_name}</h1>
                          <h1 className=''>Rs.{cart.pet_price}</h1>
                        </div>
                      ) : (
                        <div>
                          <img className='rounded-lg h-[200px] w-[200px]' src={`${imageUrl}${cart.product_image}`} alt="" />
                          <h1 className='font-bold text-xl'>{cart.product_name}</h1>
                          <h1 className=''>Rs.{cart.product_price}</h1>
                        </div>
                      )}
                    </div>
                    <div>Quantity: {cart.qty}</div>
                  </div>
                ))}
              </div>
              <h1 className='uppercase font-bold my-20 text-xl'>Total: Rs.{total}</h1>
            </div>
          )}
        </div>

        <div>
          <Card color="transparent" className="flex justify-center items-center" shadow={false}>
            <Typography color="black" className="mt-1 uppercase font-bold text-2xl">
              Enter your details for the order
            </Typography>
            <form onSubmit={handleSubmit} className="mt-8 mb-2 w-[500px] max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Contact
                </Typography>
                <Input
                  name="email"
                  type="email"
                  size="lg"
                  placeholder="abc123@gmail.com"
                  className="!border-t-blue-gray-200 focus:!border-orange-700"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={handleChange}
                  value={values.email}
                />

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Full Name
                </Typography>
                <Input
                  name="name"
                  size="lg"
                  placeholder="Full Name"
                  className="!border-t-blue-gray-200 focus:!border-orange-700"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={handleChange}
                  value={values.name}
                />

                <div className='grid sm:grid-rows-1 lg:flex'>
                  <div className='flex flex-col'>
                    <Typography variant="h6" color="blue-gray" className="-mb-3 pb-6">
                      Select Your Province
                    </Typography>
                    <Select
                      label="Select Province"
                      placeholder="Select Province"
                      color="orange"
                      name="province"
                      onChange={(value) => setFieldValue('province', value)}
                      value={values.province || ''} // Ensure the value is correctly handled
                    >
                      <Option value="Koshi">Koshi</Option>
                      <Option value="Madesh">Madesh</Option>
                      <Option value="Bagmati">Bagmati</Option>
                      <Option value="Gandaki">Gandaki</Option>
                      <Option value="Lumbini">Lumbini</Option>
                      <Option value="Karnali">Karnali</Option>
                      <Option value="Sudurpashchim">Sudurpashchim</Option>
                    </Select>
                  </div>

                  <div className='flex flex-col sm:my-2 lg:space-x-3'>
                    <Typography variant="h6" color="blue-gray" className="-mb-3 pb-6">
                      Enter Your District
                    </Typography>
                    <Input
                      name="district"
                      size="lg"
                      placeholder="e.g., Pokhara"
                      className="lg:w-[170px] !border-t-blue-gray-200 focus:!border-orange-700"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      onChange={handleChange}
                      value={values.district}
                    />
                  </div>

                  <div className='flex flex-col'>
                    <Typography variant="h6" color="blue-gray" className="-mb-3 pb-6">
                      Enter Your Street
                    </Typography>
                    <Input
                      name="street"
                      size="lg"
                      placeholder="e.g., Street Name"
                      className="!border-t-blue-gray-200 focus:!border-orange-700"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      onChange={handleChange}
                      value={values.street}
                    />
                  </div>
                </div>

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Phone Number
                </Typography>
                <Input
                  name="phone"
                  size="lg"
                  type="text" // Use "text" for various phone formats
                  placeholder="Phone Number"
                  className="!border-t-blue-gray-200 focus:!border-orange-700"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={handleChange}
                  value={values.phone}
                />
              </div>

              <Button type="submit" className="mt-6 uppercase" fullWidth>
                Order Now
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
