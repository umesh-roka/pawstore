import React from 'react'
import { useSelector } from 'react-redux'


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
 

const Breed = () => {
  const {user} = useSelector((state)=>state.userSlice);
  return (
    <div>
      {user ? <div>  {user.isAdmin ? <AdminBreedPage/>:<UserBreedPage/>}</div> :<UserBreedPage/>}
      
    
 </div>
  )
}

export default Breed;


export const UserBreedPage =()=> {
  return (
    <Card className="w-[300px] h-[400px]">
    <CardHeader floated={false} className="h-80">
      <img height={200} src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-pictur" />
    </CardHeader>
    <CardBody className="text-center">
      <Typography variant="h4" color="blue-gray" className="mb-2">
        Dog Breed
      </Typography>
      <Typography  color="blue-gray" className=" tourent font-medium" textGradient>
        <h1>Detail</h1>
        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem provident necessitatibus, modi doloribus maiores a neque mollitia iure accusantium, distinctio et maxime recusandae. Dolore harum ipsum numquam omnis illo fuga dolorem nobis, sit possimus? */}
      </Typography>
    </CardBody>
    <CardFooter className="flex justify-center gap-7 pt-2">
      <Tooltip content="Like">
        <Typography
          as="a"
          href="#facebook"
          variant="lead"
          color="blue"
          textGradient
        >
          <i className="fab fa-facebook" />
        </Typography>
      </Tooltip>
      <Tooltip content="Follow">
        <Typography
          as="a"
          href="#twitter"
          variant="lead"
          color="light-blue"
          textGradient
        >
          <i className="fab fa-twitter" />
        </Typography>
      </Tooltip>
      <Tooltip content="Follow">
        <Typography
          as="a"
          href="#instagram"
          variant="lead"
          color="purple"
          textGradient
        >
          <i className="fab fa-instagram" />
        </Typography>
      </Tooltip>
    </CardFooter>
  </Card>
  );
}


export const AdminBreedPage = ()=>{
  return(
    <div>hii monster</div>
  )
}



