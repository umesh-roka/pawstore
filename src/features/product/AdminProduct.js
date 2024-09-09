import { Avatar, Button, Card, CardFooter, Typography } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router";

import { imageUrl } from "../../constant/constant";
import { useGetProductQuery, useRemoveProductMutation } from "../../Api/productApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import ProductPagination from "./ProductPagination";


const AdminProduct = () => {
  const [active, setActive] = useState(1)
  const {data,isloading,error} = useGetProductQuery({page:active});

  useEffect(()=>{
    return window.scrollTo(0,0);
  },[active])
  const {user}= useSelector((state)=>state.userSlice);
const nav = useNavigate();
const[removeproduct] = useRemoveProductMutation();




  const TABLE_HEAD = ["", "Title", "CreatedAt",
    "Edit", "Delete"];

    const handleRemove = async (_id,product_image)=>{
      try {
        await removeproduct({id:_id,imagePath:product_image, token:user.token}).unwrap()
        toast.success('Deleted Successfully');
      } catch (err) {
        toast.success('getting somethig error');

      }
    }
 

  return (
    <div className=" lg:ml-[100px] p-5">
      <div className="mb-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Welcome To Pow Store</h1>
        <Button onClick={()=>nav('/addproduct')} className="py-2 px-4" color="orange" size="lg">Add products</Button>
      </div>

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
            {data?.data?.map(({ product_name, product_image, createdAt,_id }, index) => {
             
              return (
                <tr key={_id}>
                  <td >
                    <Avatar src={`${imageUrl}${product_image}`} alt="avatar" />
                  </td>
                  <td >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {product_name}
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
                    <Button onClick={()=>nav(`/productedit/${_id}`)} color="light-green" size="sm">Edit</Button>
                  </td>

                  <td >
                    <Button onClick={()=>handleRemove(_id,product_image)}  color="red" size="sm" >Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <CardFooter className="lg:ml-[200px] mt-10 p-4">
          <ProductPagination active={active} setActive={setActive} />
        </CardFooter>
      </Card>}

    </div>
  )
}
export default AdminProduct



