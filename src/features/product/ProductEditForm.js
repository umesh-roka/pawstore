import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  
} from "@material-tailwind/react";
import { useFormik } from "formik";
import {  useUpdateProductMutation } from "../../Api/productApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { imageUrl } from "../../constant/constant";
import * as yup from 'yup'

const ProductEditForm = ({data}) => {

  const nav = useNavigate();
 const {user} = useSelector((state)=>state.userSlice);
const[updateProduct,{isLoading}] = useUpdateProductMutation();

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
    product_name:data.product_name,
    product_price:data.product_price,
    product_detail:data.product_detail,
    countInStock:data.countInStock,
    category:data.category,
    product_image:null,
    imageReview:data.product_image,

  },
  onSubmit: async (val)=>{
    const formData = new FormData();
    formData.append('product_name', val.product_name);
    formData.append('product_price', Number(val.product_price));
    formData.append('product_detail', val.product_detail);
    formData.append('countInStock', Number(val.countInStock))
    formData.append('category', val.category);
    try {
      if(val.pet_image === null){
        await updateProduct({
          id:data._id,
          token:user.token,
          body:formData
        }).unwrap()

      }
      else{
        formData.append('image', val.product_image);
        formData.append('imagePath', val.product_image);
        
        await updateProduct({
          id:data._id,
          body:formData,
          token:user.token
        }).unwrap();

      
      }
      console.log('updated')
      toast.success(
      'updated successfully'
      )
      nav('/adminproduct');
    } catch (err) {
      
    }

  },
validationSchema:productSchema
 })

  return (
    <Card color="transparent" shadow={false} className="max-w-sm mx-auto mt-4 mb-4">
      <Typography variant="h4" color="blue-gray">
        Udpate Product
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
            value={values.product_name}
          />

        {errors.product_name && touched.product_name && <h1 className="text-red-500">{errors.product_name}</h1>}

          <Input
            size="lg"
            placeholder="Product Price"
            label="Product Price"
            color="orange"
            name="product_price"
            value={values.product_price}
            onChange={handleChange}
            
          />

{errors.product_price && touched.product_price && <h1 className="text-red-500">{errors.product_price}</h1>}


          <Input
            size="lg"
            placeholder="Count In Stock"
            label="Count In Stock"
            color="orange"
            name="countInStock"
            value={values.countInStock}
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
            value={values.category}
          />

{errors.category && touched.category && <h1 className="text-red-500">{errors.category}</h1>}

          <Textarea
            size="lg"
            placeholder="Product Detail"
            label="Product Detail"
            color="orange"
            name="product_detail"
            onChange={handleChange}
            value={values.product_detail}
          />
 {errors.product_detail && touched.product_detail && <h1 className="text-red-500">{errors.product_detail}</h1>}

          <div className="space-y-2">
            <h1>Select An Image</h1>
            <Input
              label="Image File"
              type="file"
              name="image"
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

           {values.imageReview && <img src={values.product_image === null ? `${imageUrl}${values.imageReview}` : values.imageReview} alt="" />}
          </div>
        </div>

        <Button type="submit"   className="mt-6" fullWidth >
        Submit</Button>
      </form>
    </Card>
  );
};

export default ProductEditForm;

