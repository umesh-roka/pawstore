import {
  Card,
  Input,

  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

 
const Contact=()=> {
  return (
    <div className="  bg-orange-100 grid mb-2 mt-2 pb-[80px] sm:grid-cols-1 lg:grid-cols-2 lg:py-6">
    <div>
      <h1 className="text-black uppercase text-2xl text-center font-bold">Contact Us</h1>
      <h1 className="text-justify text-lg mt-[20px] mx-5">Reach out to us for any queries or support related to your pet's needs. Whether you need advice, assistance, or have questions about our services, we're here to help you and your furry companions! Let's stay connected for a pawsitive experience.</h1>

      <ul className="lg:ml-5 text-xl text-gray-700 mt-[30px] font-bold space-y-5">
        
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
       <NavLink> <li className="flex  mb-4 ">Phone Number <br/>
        +977 9845682352
        </li>
        </NavLink>
        
        <NavLink>
        <li className="flex  mb-4 ">Gmail <br/>
        pawstore12@gmail.com
        </li>
        </NavLink>

        <NavLink>
        <li className="flex mb-[10px]"><img className='h-[40px]' src="https://static.vecteezy.com/system/resources/thumbnails/041/643/208/small/facebook-logo-facebook-icon-transparent-white-background-free-png.png" alt=" facebook" /> <h1 className="mt-1 ml-5">Facebook</h1></li>
        </NavLink>

        <NavLink>
        <li className="flex mb-[10px]"><img className='h-[40px]' src="https://static.vecteezy.com/system/resources/thumbnails/027/209/183/small/instagram-button-icon-social-media-free-png.png" alt="instagram" /><h1 className="mt-1 ml-5 ">Instagram</h1></li>
        </NavLink>

        <NavLink>
        <li className="flex ml-1 mb-[10px]"><img className='h-[30px] ' src="https://static.vecteezy.com/system/resources/thumbnails/016/716/480/small/whatsapp-icon-free-png.png" alt='gmail' /><h1 className="mt-1 ml-8">Whatsapp</h1></li>
        </NavLink>

        <NavLink>
        <li className="flex ml-1 mb-[10px]"><img className='h-[30px] ' src="https://static.vecteezy.com/system/resources/thumbnails/034/716/139/small/x-new-twitter-logo-free-png.png" alt='gmail' /><h1 className="mt-1 ml-8">Twitter</h1></li>
        </NavLink>
        
         </div>
        
     
      </ul>
    </div>
     <Card  className ="lg:ml-[20px] bg:gray-600 py-[40px] sm:px-[10px] lg:px-[40px] lg:mr-10" shadow={false}>
      <Typography variant="h4" color="blue-gray">
       Please if you have any <span className="uppercase font-bold bg-black text-white px-2 py-1 rounded-lg">feedback</span> just pass it to us.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <div className="lg:flex lg:gap-4 ">
            <div>
            <Typography variant="h6" color="blue-gray" className="mb-3 ">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="Your Name"
            className=" !border-blue-gray-500 focus:!border-orange-400"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
            </div>
        <div>  <Typography variant="h6" color="blue-gray" className="mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
           className=" !border-blue-gray-500 focus:!border-orange-400"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

        </div>
        

          </div>
        
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Feedback 
          </Typography>
          <Textarea
            size="xl"
          className=" !border-blue-gray-500 focus:!border-orange-400"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button className="mt-6" fullWidth>
         Submit
        </Button>
     
      </form>
    </Card>
    </div>
  );
}

export default Contact;