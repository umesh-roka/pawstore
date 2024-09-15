import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useUserLoginMutation } from "../../Api/userApi";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {  setUser } from "../../Slice/userSlice";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";


const Login=()=> {
  const nav = useNavigate();
const dispatch = useDispatch();
 const [userLogin,] = useUserLoginMutation();
 const {handleSubmit,handleChange,values} = useFormik({
  initialValues:{
    email:'',
    password:'',
  },
  onSubmit: async(val)=>{
    try {
      const response = await userLogin(val).unwrap();
       
      dispatch(setUser(response));
      toast.success('login successful')
      nav('/');

    } catch (err) {
      console.log(err);
      toast.error(err.data?.message)
    }
  }
 })

  return (
     <Card color="transparent" className="flex justify-center items-center mt-8" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Login Your Account
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to login.
      </Typography>
      <form  onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
         
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
          name="email"
          onChange={handleChange}
          value={values.email}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-orange-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
          name="password"
          onChange={handleChange}
          value={values.password}
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-orange-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        
        <Button type="submit" className="mt-6" fullWidth>
         Longin
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
        <h1> Don't have an account ? <button onClick={()=>nav('/signup')}>Signup</button></h1>
        
        </Typography>
      </form>
    </Card>
  );
}

export default Login;