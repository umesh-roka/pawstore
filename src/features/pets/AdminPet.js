import { Avatar, Button, Card, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useGetPetsQuery, useRemovePetMutation } from "../../Api/petApi";
import { imageUrl } from "../../constant/constant";


const AdminPet = () => {
  const {user} = useSelector((state)=>state.userSlice);
const nav = useNavigate();
const {data,isloading,error} = useGetPetsQuery();
console.log(data);
const [removePet] = useRemovePetMutation();

  const TABLE_HEAD = ["", "Title", "CreatedAt",
    "Edit", "Delete"];

    const handleRemove = async (_id,pet_image)=>{
      try {
        await removePet({id:_id,imagePath:pet_image, token:user.token}).unwrap()
      } catch (err) {
        
      }
    }
 

  return (
    <div className="p-5">
      <div className="mb-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Welcome To Pow Store</h1>
        <Button onClick={()=>nav('/addpet')} className="py-2 px-4" color="orange" size="lg">Add Pets</Button>
      </div>

      {<Card className="max-w-3xl">
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
      </Card>}

    </div>
  )
}
export default AdminPet



