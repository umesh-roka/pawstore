import React from 'react'
import { useSelector } from 'react-redux';
import { useAddPetsMutation } from '../Api/petApi';
import { useFormik } from 'formik';

const AddPetForm = () => {
  const {user } = useSelector((state)=>state.userSlice);
  const [addPet,{isloading}] = useAddPetsMutation();
  const {handleSubmit,handleChange,values,setFieldValue} = useFormik({
    initialValues:{

    },
    onSubmit:async(val)=>{
      
    }
  })
  return (
    <div>
      
    </div>
  )
}

export default AddPetForm;
