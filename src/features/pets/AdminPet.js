import { Avatar, Button, Card, CardFooter, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useGetPetsQuery, useRemovePetMutation } from "../../Api/petApi";
import { imageUrl } from "../../constant/constant";
import { toast } from "react-toastify";
import PetPagination from "./PetPagination";
import { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage";
import NotGettingData from "../../ui/NotGettingData";


const AdminPet = () => {
  const {user} = useSelector((state)=>state.userSlice);

const nav = useNavigate();
const [active,setActive] = useState(1);

const {data,isloading,error} = useGetPetsQuery({page:active});

useEffect(() => {
  window.scrollTo(0, 0);
}, [active])



const [removePet] = useRemovePetMutation();

  const TABLE_HEAD = ["", "Title", "CreatedAt",
    "Edit", "Delete"];

    const handleRemove = async (_id,pet_image)=>{
      try {
        await removePet({id:_id,imagePath:pet_image, token:user.token}).unwrap()
        toast.success('Deleted Successfully');

      } catch (err) {
        toast.success('getting somethig error');

      }
    }
   

  return (
    <div className=" lg:ml-[100px]  p-5">
     {!error && <div className="mb-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Welcome To Pow Store</h1>
        <Button onClick={()=>nav('/addpet')} className="py-2 px-4" color="orange" size="lg">Add Pets</Button>
      </div>} 
      {isloading ? <LoadingPage/> : error ? <NotGettingData/>:<div>
        {<Card className="sm:max-w-2xl lg:max-w-4xl ">
        <table className=" table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.data?.map(({ pet_name, pet_image, createdAt,_id }, index) => {
             
              return (
                <tr key={_id}>
                  <td >
                    <Avatar src={`${imageUrl}${pet_image}`} alt="avatar" />
                  </td>
                  <td >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {pet_name}

                    </Typography>
                  </td>
                  <td >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {createdAt}
                    </Typography>
                  </td>
                  <td >
                    <Button onClick={()=>nav(`/petedit/${_id}`)} color="light-green" size="sm">Edit</Button>
                  </td>

                  <td >
                    <Button  onClick={()=> handleRemove(_id,pet_image)} color="red" size="sm" >Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <CardFooter className="lg:ml-[200px] mt-10 p-4">
          <PetPagination data={data} active={active} setActive={setActive}/>
        </CardFooter>
      </Card>}
      </div>}
      

    </div>
  )
}
export default AdminPet



