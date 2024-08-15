import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useUserSignupMutation } from "../../Api/userApi";

 
const Signup = () => {
const [userSignup,{isLoading}] = useUserSignupMutation();
const{handleSubmit,handleChange,values} = useFormik({
  initialValues:{
    username:'',
    email:'',
    password:'',
  },
  onSubmit:async(val)=>{
    try {
  await userSignup(val).unwrap();
      console.log('success')

    } catch (err) {
      console.log(err);
    }
  }
})
  return (
     <Card color="transparent" className="flex justify-center items-center mt-8" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Signup
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to Register your account.
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
          name="username"
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
        <Button type="submit"  className="mt-6" fullWidth>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
        <h1> Already have an account ? <button>Login</button></h1>
        
        </Typography>
      </form>
    </Card>
  );
}

export default Signup;