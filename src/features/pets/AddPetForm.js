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
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAddPetsMutation } from "../../Api/petApi";

import * as yup from 'yup';
const AddPetForm = () => {
  const nav = useNavigate();
  const { user } = useSelector((state) => state.userSlice);
  const [addPet, { isLoading }] = useAddPetsMutation();

  const petSchema = yup.object({
  
    pet_name:yup.string().required('Pet name is required'),
    pet_detail:yup.string().required('Pet detail is required'),
    pet_price:yup.number().required('Pet price is required'),
    pet_breed:yup.string().required('Pet breed is required'),
    pet_category:yup.string().required('Pet category is required'),
    pet_gender:yup.string().required('Pet gender is required'),
    countInStock:yup.number().required('Count in stock is required'),
    pet_image:yup.mixed().required('provide valid image with ext.. jpg , png , jpeg').test('fileType','invalid image',(e)=>{
      return['image/jpg','image/png','image/jpeg'].includes(e.type)
    })
  });

  const { handleSubmit,errors,touched, handleChange, setFieldValue, values } = useFormik({
    initialValues: {
      pet_name: '',
      pet_detail: '',
      pet_breed: '',
      pet_gender: '',
      pet_price: '',
      pet_category: '',
      countInStock: '',
      pet_image: null,
      imageReview: '',
    },
    onSubmit: async (val) => {
      const formData = new FormData();
      formData.append('pet_name', val.pet_name);
      formData.append('pet_detail', val.pet_detail);
      formData.append('pet_breed', val.pet_breed);
      formData.append('pet_gender', val.pet_gender);
      formData.append('pet_category', val.pet_category);
      formData.append('pet_price', Number(val.pet_price));
      formData.append('countInStock', Number(val.countInStock));
      formData.append('pet_image', val.pet_image);

      try {
        await addPet({body:formData,token:user.token}).unwrap();
        nav('/adminpet');
        toast.success('pet added successfully')
      } catch (err) {
        toast.error('something wrong')

      }
    },
    validationSchema:petSchema
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
          />
        {errors.pet_name && touched.pet_name && <h1 className="text-red-500">{errors.pet_name}</h1>}

          <Input
            size="lg"
            placeholder="Pet Breed"
            label="Pet Breed"
            color="orange"
            name="pet_breed"
            onChange={handleChange}
          />
          {errors.pet_breed && touched.pet_breed && <h1 className="text-red-500">{errors.pet_breed}</h1>}

          <Input
            size="lg"
            placeholder="Pet Price"
            label="Pet Price"
            color="orange"
            name="pet_price"
            onChange={handleChange}
            
          />
      {errors.pet_price && touched.pet_price && <h1 className="text-red-500">{errors.pet_price}</h1>}

          <div>
            <h1>Select the Gender</h1>
            {petGen.map((gen, i) => (
              <Radio
                key={i}
                name="pet_gender"
                onChange={handleChange}
                label={gen.label}
                value={gen.value}
                color={gen.color}
              />
              
            ))}
            {errors.pet_gender && touched.pet_gender && <h1 className="text-red-500">{errors.pet_gender}</h1>}
          </div>

          <Select onChange={(e) => setFieldValue('pet_category', e)} label="Select Category"   
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
          />
    {errors.countInStock && touched.countInStock && <h1 className="text-red-500">{errors.countInStock}</h1>}
          <Textarea
            size="lg"
            placeholder="Pet Detail"
            label="Pet Detail"
            color="orange"
            name="pet_detail"
            onChange={handleChange}
          />
          {errors.pet_detail && touched.pet_detail && <h1 className="text-red-500">{errors.pet_detail}</h1>}

          <div className="space-y-2">
            <h1>Select An Image</h1>
            <Input
              label="Image File"
              type="file"
              name="pet_image"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setFieldValue('imageReview', URL.createObjectURL(file));
                  setFieldValue('pet_image', file);
                }
              }}
            />
             {errors.pet_image && touched.pet_image && <h1 className='text-red-500'>{errors.pet_image}</h1>}
            {values.imageReview && <img src={values.imageReview} alt="Preview" />}
          </div>
        </div>

        <Button type="submit"  className="mt-6" fullWidth disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Submit'}
        </Button>
      </form>
    </Card>
  );
};

export default AddPetForm;

const petGen = [
  { label: 'Male', color: 'red', value: 'male' },
  { label: 'Female', color: 'pink', value: 'female' },
];
