import { Button, Card, Input, Typography } from '@material-tailwind/react';
import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { useUpdateUserMutation } from '../../Api/userApi';
import { toast } from 'react-toastify';
import { setUser } from '../../Slice/userSlice';

const UserDetail = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const{user} = useSelector((state)=>state.userSlice);
   const[userUpdate,{isLoading:loading}]=useUpdateUserMutation(id);
  const {handleChange, handleSubmit ,isLoading,values} = useFormik({
    initialValues:{
      username:user.username || '',
      email:user.email || ''

    },
    onSubmit:async (val)=>{
      try {
        await userUpdate ({
          body:{
            username:val.username,
            email:val.email
          },
          token:user.token,
          id:user.id
          
        }).unwrap();
        dispatch(setUser({ ...user, email: val.email, username: val.username }));
        toast.success('successfully updated');
        
      } catch (err) {
        toast.error('user not updated')
      }

    }
  })
  return (
    <Card color="transparent" className='lg:w-[400px]' shadow={false}>
      <Typography color="gray" className="mt-1 uppercase font-bold  text-2xl">
        Update Profile
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-full">
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
            Username
          </Typography>
          <Input
          name="username"
          onChange={handleChange}
          value={values.username}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-orange-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />



        </div>

        <Button loading={isLoading} type='submit' className="mt-6" fullWidth>
          Update
        </Button>

      </form>
    </Card>
  )
}

export default UserDetail
