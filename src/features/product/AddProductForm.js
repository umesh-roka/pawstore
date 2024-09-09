import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useAddProductsMutation } from "../../Api/productApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import * as yup from 'yup'

const AddProductForm = () => {
  const nav = useNavigate();
 const {user} = useSelector((state)=>state.userSlice);
const [addProduct,isLoading] = useAddProductsMutation();

const productSchema = yup.object({
  product_name: yup.string().required('Product name is required'),
  product_price: yup.number().required('Product price is required'),
  product_detail: yup.string().required('Product detail is required'),
  countInStock: yup.number().required('Count in stock is required'),
  category: yup.string().required('Category is required'),
  // product_image : yup.string().required('provide image with valid ext...  jpg , jpeg , png ').test('fileType','invalid image',(e)=>{
  //   return['image/jpg','image/png','image/jpeg'].includes(e.type);
  // })

});

 const {handleChange,handleSubmit,errors,touched,values,setFieldValue} = useFormik({
  initialValues:{
    product_name:'',
    product_price:'',
    product_detail:'',
    countInStock:'',
    category:'',
    product_image:null,
    imageReview:''

  },
  onSubmit: async (val)=>{
    const formData = new FormData();
    formData.append('product_name', val.product_name);
    formData.append('product_price', Number(val.product_price));
    formData.append('product_detail',val.product_detail);
    formData.append('countInStock', Number(val.countInStock));
    formData.append('category', val.category);
    formData.append('product_image', val.product_image);
    try {
      await addProduct({
        body:formData,
        token:user.token
      }).unwrap();
      toast.success('success')
      nav('/adminproduct')
    } catch (err) {
      
    }
  },
validationSchema:productSchema
 })

  return (
    <Card color="transparent" shadow={false} className="max-w-sm mx-auto mt-4 mb-4">
      <Typography variant="h4" color="blue-gray">
        Add Product
      </Typography>

      <form onSubmit={handleSubmit}  className="mt-2">
        <div className="mb-1 flex flex-col gap-3 space-y-2">
          <Input
            size="lg"
            placeholder="Product Name"
            label="Product Name"
            color="orange"
            name="product_name"
            onChange={handleChange}
          />
          {errors.product_name && touched && <h1 className="text-red-500">{errors.product_name}</h1>}

          <Input
            size="lg"
            placeholder="Product Price"
            label="Product Price"
            color="orange"
            name="product_price"
            onChange={handleChange}
            
          />
          {errors.product_price && touched.product_price && <h1 className="text-red-500">{errors.product_price}</h1>}
          

          <Input
            size="lg"
            placeholder="Count In Stock"
            label="Count In Stock"
            color="orange"
            name="countInStock"
            onChange={handleChange}
          />
          {errors.countInStock && touched.countInStock && <h1 className="text-red-500">{errors.countInStock}</h1>}

      <Input
            size="lg"
            placeholder="Category"
            label="Category"
            color="orange"
            name="category"
            onChange={handleChange}
          />

          {errors.category && touched.category && <h1 className="text-red-500">{errors.category}</h1>}

          <Textarea
            size="lg"
            placeholder="Product Detail"
            label="Product Detail"
            color="orange"
            name="product_detail"
            onChange={handleChange}
          />
          {errors.product_detail && touched.product_detail && <h1 className="text-red-500">{errors.product_detail}</h1>}
          <div className="space-y-2">
            <h1>Select An Image</h1>
            <Input
              label="Image File"
              type="file"
              name="product_image"
              accept="image/*"
              onChange={(e)=>{
                const file = e.target.files[0];
                if(file){
                  setFieldValue('imageReview',URL.createObjectURL(file));
                  setFieldValue('product_image',file);
                }
              }}
            />

              {errors.product_image && touched.product_image && <h1 className="text-red-500">{errors.product_image}</h1>}

           {values.imageReview && <img src = {values.imageReview} alt= ''/>}
          </div>
        </div>

        <Button type="submit"   className="mt-6" fullWidth >
        Submit</Button>
      </form>
    </Card>
  );
};

export default AddProductForm;

