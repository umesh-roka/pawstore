import {
  Card,
  Input,

  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

 
const FeedBack=()=> {
  return (
    <div className=" lg:py-6  lg:mb-10 bg-gray-300 grid sm:grid-cols-1 lg:grid-cols-2 ">
    
     <Card  className ="lg:ml-[10px] bg:gray-600 py-[40px] sm:px-[10px] lg:px-[40px] lg:mr-[20px] sm:rounded-none  " shadow={false}>
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

    <figure className="relative h-full  ">
       <img
         className="h-full sm:py-3 sm:mt-4 lg:rounded-tr-3xl lg:rounded-br-3xl lg:rounded-xl lg:pr-4  object-fill w-full object-center"
         src="https://www.shutterstock.com/image-photo/heartwarming-moment-between-dog-cat-600nw-2432338827.jpg"
         alt="nature img"
       />
       <figcaption className="absolute bottom-10 left-12  ">
         <div>
           <Typography variant="h5"  color="white">
           "
           The relationship between pets and humans is built on mutual love, companionship, and emotional support, enriching both their lives."
           </Typography>
           </div>
       </figcaption>
     </figure>
    </div>
  );
}
export default FeedBack;