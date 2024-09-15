import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card,  Typography } from '@material-tailwind/react';
import { useGetPetByIdQuery } from '../../Api/petApi';
import { imageUrl } from '../../constant/constant';
import { useFormik } from 'formik';
import{addCart} from '../../Slice/cartSlice'
import PetReview from './PetReview';
import DetailPageLoading from '../components/DetailPageLoading';
const PetDetail = () => {
const { id } = useParams();
const {user} = useSelector((state)=>state.userSlice);
const {data,isLoading,error} = useGetPetByIdQuery(id);

const pet = data?.data;
  return (
    <div className='my-4'>
  <h1 className='font-bold text-4xl ml-16 uppercase bg-orange-300 rounded-lg px-2 py-1 w-fit'>Pet Detail</h1>
  {isLoading ?  <DetailPageLoading/>: error ?<h1>getting error</h1> : <div> <div className='grid sm:grid-cols-1 2xl:grid-cols-3 lg:mx-[50px] p-4 items-center gap-10'>

<div className="image">
  <img className='w-full lg:mb-[140px] rounded-xl' src={`${imageUrl}${pet.pet_image}`} alt="" />
</div>
<div className="info  space-y-1">
<h1 className='font-bold text-3xl  '>{pet.pet_name}</h1>
<p className='text-xl font-bold' >Price: Rs.{pet.pet_price}</p>
<p className='text-xl font-bold' >Breed: {pet.pet_breed}</p>
<div>
<p className='text-xl font-bold' >Detail </p>
<p className='text-xl text-justify' >{pet.pet_detail} </p>
</div>

</div>

{user === null ? <AddCart pet={pet} /> : (user.isAdmin ? '' : (pet && <AddCart pet={pet} />))}

</div>

<div className='lg:ml-[50px]'><PetReview user={user} id={id} reviews={pet.reviews}/>
  </div></div>}

    </div>
  )
}

export default PetDetail;



export const AddCart = ({ pet }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
const {carts} = useSelector((state)=>state.cartSlice);
console.log(carts);

const isExist = carts.find((cart)=>cart._id === pet._id);
  const formik = useFormik({
    initialValues:{
      qty:isExist?.qty || 1,
    }
  })
  
const handleSubmit =()=>{
  dispatch(addCart({...pet,qty:formik.values.qty}));
  nav('/cartpage');
}
  return (
    <Card className="h-[300px] lg:mb-[150px] w-full overflow-scroll">
    <table>
    <thead>
          <tr>
            
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                 pet Name
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                {pet.pet_name}
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
                    {[...Array(pet.countInStock).keys()].map((c)=>{
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