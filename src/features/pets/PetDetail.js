import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Typography } from '@material-tailwind/react';
import { useGetPetByIdQuery } from '../../Api/petApi';
import { imageUrl } from '../../constant/constant';
import { useFormik } from 'formik';
import{addCart} from '../../Slice/cartSlice'
const PetDetail = () => {
const { id } = useParams();
const {user} = useSelector((state)=>state.userSlice);
const {data,isLoading} = useGetPetByIdQuery(id);
if(isLoading){
  return <div>loading...</div>
}
const pet = data?.data;
console.log(pet.pet_name)
  return (
    <div className='my-4'>
  <h1 className='font-bold text-4xl ml-16 uppercasev'>Pet Detail</h1>
 <div className='grid sm:grid-cols-1 2xl:grid-cols-3 lg:mx-[50px] p-4 items-center gap-10'>

<div className="image">
  <img className='w-full rounded-xl' src={`${imageUrl}${pet.pet_image}`} alt="" />
</div>
<div className="info space-y-3">
  <h1 className='font-bold text-3xl'>{pet.pet_name}</h1>
  <p className='text-xl' >{pet.pet_detail} </p>
  <p className='text-xl' >Rs.{pet.pet_price}</p>

</div>

{/* {user === null ? '' : (user.isAdmin ? '' : (pet && <AddCart pet={pet} />))} */}
<AddCart pet={pet} />
</div>
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
    <Card className="h-full w-full overflow-scroll">
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