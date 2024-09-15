import {
  Card,
  Input,

  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

 
const Contact=()=> {
  return (
    <div className=" mb-10 bg-orange-100 grid sm:grid-cols-1 lg:grid-cols-2 lg:py-6">
    <div>
      <h1 className="text-black uppercase text-2xl text-center font-bold">Contact Us</h1>
      <ul className="lg:ml-[100px] text-xl text-gray-700 mt-[50px] font-bold space-y-5">
        <li>Phone Number <br/>
        +977 9845682352
        </li>
        
        <li><img className='h-[40px]' src="https://static.vecteezy.com/system/resources/thumbnails/041/643/208/small/facebook-logo-facebook-icon-transparent-white-background-free-png.png" alt=" facebook" /> <h1>Facebook</h1></li>
        <li><img className='h-[40px]' src="https://static.vecteezy.com/system/resources/thumbnails/027/209/183/small/instagram-button-icon-social-media-free-png.png" alt="instagram" /><h1>Instagram</h1></li>
        <li><img className='h-[30px] ' src="https://static.vecteezy.com/system/resources/thumbnails/016/716/480/small/whatsapp-icon-free-png.png" alt='gmail' /><h1>Whatsapp</h1></li>
        <li><img className='h-[30px] ' src="https://static.vecteezy.com/system/resources/thumbnails/034/716/139/small/x-new-twitter-logo-free-png.png" alt='gmail' /><h1>Twitter</h1></li>
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