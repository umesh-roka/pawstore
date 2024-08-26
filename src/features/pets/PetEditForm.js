import React from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Radio,
  Select,
  Option,
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useUpdatePetMutation } from '../../Api/petApi';
import { imageUrl } from '../../constant/constant';

const petGen = [
  { label: 'Male', color: 'red', value: 'male' },
  { label: 'Female', color: 'pink', value: 'female' },
];

const PetEditForm = ({ data }) => {
  const nav = useNavigate();
  const{user} = useSelector((state)=>state.userSlice);
  const [updatePet, { isLoading }] = useUpdatePetMutation();

  const { handleSubmit, handleChange,values,  setFieldValue } = useFormik({
    initialValues: {
      pet_name: data.pet_name ,
      pet_detail: data.pet_detail ,
      pet_breed: data.pet_breed,
      pet_gender: data.pet_gender,
      pet_price: data.pet_price,
      pet_category: data.pet_category,
      countInStock: data.countInStock,
      pet_image: null,
      imageReview: data.pet_image,
    },
    onSubmit: async (val,{resetForm}) => {
      const formData = new FormData();
      formData.append('pet_name', val.pet_name);
      formData.append('pet_detail', val.pet_detail);
      formData.append('pet_breed', val.pet_breed);
      formData.append('pet_gender', val.pet_gender);
      formData.append('pet_category', val.pet_category);
      formData.append('pet_price', Number(val.pet_price));
      formData.append('countInStock', Number(val.countInStock));

      try {

        if(val.pet_image === null) {

          await updatePet({
            id:data._id,
            body:formData,
            token:user.token,
          }).unwrap();
        }
        else{
          formData.append('image', val.pet_image);
          formData.append('imagePath', data.pet_image);
          await updatePet({
            id:data._id,
            body:formData,
            token:user.token,
          }).unwrap();
        }
       console.log('success');
toast.success('updated successfully') 
nav(-1)     
      } catch (err) {
        toast.error('something gets wrong')
      }
    }
  });

  return (
    <Card color="transparent" shadow={false} className="max-w-sm mx-auto mt-4 mb-4">
      <Typography variant="h4" color="blue-gray">
        Add Pet
      </Typography>

      <form onSubmit={handleSubmit} className="mt-2">
        <div className="mb-1 flex flex-col gap-3 space-y-2">
          <Input
            size="lg"
            placeholder="Pet Name"
            label="Pet Name"
            color="orange"
            name="pet_name"
            onChange={handleChange}
            value={values.pet_name}
          />

          <Input
            size="lg"
            placeholder="Pet Breed"
            label="Pet Breed"
            color="orange"
            name="pet_breed"
            onChange={handleChange}
            value={values.pet_breed}
          />

          <Input
            size="lg"
            placeholder="Pet Price"
            label="Pet Price"
            color="orange"
            name="pet_price"
            onChange={handleChange}
            value={values.pet_price}
          />

          <div>
            <h1>Select the Gender</h1>
            {petGen.map((gen, i) => (
              <label key={i} className="inline-flex items-center space-x-2">
                <Radio
                  name="pet_gender"
                  onChange={(e) => setFieldValue('pet_gender', e.target.value)}
                  value={gen.value}
                  color={gen.color}
                  checked={values.pet_gender === gen.value}
                />
                <span>{gen.label}</span>
              </label>
            ))}
          </div>

          <Select
            onChange={(e) => setFieldValue('pet_category', e.target.value)}
            label="Select Category"
            value={values.pet_category}
          >
            <Option value="Cat">Cat</Option>
            <Option value="Dog">Dog</Option>
          </Select>

          <Input
            size="lg"
            placeholder="Count In Stock"
            label="Count In Stock"
            color="orange"
            name="countInStock"
            onChange={handleChange}
            value={values.countInStock}
          />

          <Textarea
            size="lg"
            placeholder="Pet Detail"
            label="Pet Detail"
            color="orange"
            name="pet_detail"
            onChange={handleChange}
            value={values.pet_detail}
          />

          <div className="space-y-2">
            <h1>Select An Image</h1>
            <Input
              label="Image File"
              onChange={(e) => {
                const file = e.target.files[0];
               
                  setFieldValue('imageReview', URL.createObjectURL(file));
                  setFieldValue('pet_image', file);
                
              }}
              type="file"
              name="image"
             multiple accept="image/*"
             
            />
            {values.imageReview && <img src={values.pet_image === null ? `${imageUrl}${values.imageReview}` : values.imageReview} alt="" />}
          </div>
        </div>

        <Button type="submit"  className="mt-6" fullWidth disabled={isLoading}>
          {isLoading ? 'Updating...' : 'Submit'}
        </Button>
      </form>
    </Card>
  );
}

export default PetEditForm;










