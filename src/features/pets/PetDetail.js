import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux';
import { Button, Card, Typography } from '@material-tailwind/react';
import { useGetPetByIdQuery } from '../../Api/petApi';
import { imageUrl } from '../../constant/constant';

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
  <p className='text-xl' >{pet.pet_detail}</p>
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
         
            
            </div>
              </th>
           
          </tr>
        </thead>
    </table>
      <div className='flex justify-center sm:pb-3 pt-7'>
        <Button>Add To Cart</Button>
      </div>
    </Card>
  )
}