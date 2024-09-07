import { Button } from '@material-tailwind/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { imageUrl } from '../../constant/constant';
import { useFormik } from 'formik';
import { clearAll, removeFromCart, updateCartQuantity } from '../../Slice/cartSlice'; // Assuming you have an action to update the quantity
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const CartPage = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cartSlice);
  const {user} = useSelector((state)=>state.userSlice);

  // Calculate the total price for all items in the cart
  const total = carts.reduce((a, b) => a + b.qty * (b.pet_price || b.product_price), 0);

  const formik = useFormik({
    initialValues: {
      qty: 1,
    },
  });

  const removeCart = (_id) => {
    dispatch(removeFromCart(_id));
  };

  const handleDelete = () => {
    dispatch(clearAll());
  };

  const handleQuantityChange = (e, cart) => {
    const newQty = e.target.value;
    formik.setFieldValue('qty', newQty);
    dispatch(updateCartQuantity({ _id: cart._id, qty: newQty })); // Assuming you have this action
  };

  return (
    <div>
      {carts.length === 0 ? (
        // cart empty 
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Cart is empty</h1>
      
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink to='/'
              className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add to cart
            </NavLink>
            <NavLink className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </NavLink>
          </div>
        </div>
      </main>
      ) : (
        <div>
          <div className='ml-[20px] py-9'>
            <Button color='red' onClick={handleDelete}>Clear All</Button>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 sm:ml-[10px] lg:mx-[50px]'>
            {carts.map((cart) => {
              const itemTotal = cart.qty * (cart.pet_price || cart.product_price);
             

              return (
                <div className='' key={cart._id}>
                  <div>
                    {cart.pet_image ? (
                      <div>
                        <img className='rounded-lg h-[200px] sm:w-[180px] lg:w-[200px]' src={`${imageUrl}${cart.pet_image}`} alt="" />
                        <h1 className='font-bold text-xl'>{cart.pet_name}</h1>
                        <h1 className=''>Rs.{cart.pet_price}</h1>
                      </div>
                    ) : (
                      <div>
                        <img className='rounded-lg h-[200px] sm:w-[180px] lg:w-[200px]' src={`${imageUrl}${cart.product_image}`} alt="" />
                        <h1 className='font-bold text-xl'>{cart.product_name}</h1>
                        <h1 className=''>Rs.{cart.product_price}</h1>
                      </div>
                    )}
                  </div>

                  <div>
                    <select name='qty' value={cart.qty} onChange={(e) => handleQuantityChange(e, cart)}>
                      {[...Array(cart.countInStock).keys()].map((c) => (
                        <option key={c + 1} value={c + 1}>{c + 1}</option>
                      ))}
                    </select>
                    <h1>Total Price: Rs.{itemTotal}</h1>
                  </div>
                  <div>
                    <Button onClick={() => removeCart(cart._id)} color='red'>Delete</Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='sm:ml-[10px] lg:ml-[50px] py-10'>
            <h1 className='text-xl my-6'>Grand Total: Rs.{total}</h1>
            {user ?  <Button onClick={() => nav('/orderpage')}>Place an Order</Button>:  <Button onClick={() => nav('/login')}>Login to Order</Button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;


