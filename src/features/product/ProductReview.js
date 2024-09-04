import React from 'react'
import { useAddReviewMutation } from '../../Api/productApi'
import { useParams } from 'react-router'
import { useFormik } from 'formik';
import { Button, Rating, Textarea } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ProductReview = ({reviews}) => {
  const{id} = useParams();
  const{user} = useSelector((state)=>state.userSlice);
  const username = user.username;
  const[addReview,{isLoading}] = useAddReviewMutation()
  const{handleSubmit,handleChange,setFieldValue} = useFormik({
    initialValues:{
      rating:0,
      comment:''
    },
    onSubmit: async (val)=>{
    try {
      await addReview({
        id,
        token:user.token,
       body:{
        rating:val.rating,
        comment:val.comment
       }

      }).unwrap()
      toast.success('review added successfully');
    } catch (err) {
      toast.error('review added successfully');

    }
    }
  })
  return (
    <div className='space-y-2 p-7'>

    {!user?.isAdmin && user && <div>
      <h1>Add Review here</h1>
      <form onSubmit={handleSubmit}>
        <div className="w-96 space-y-2" >
          <Rating onChange={(e) => setFieldValue('rating', e)} name="rating" />
          <Textarea label="Message" name='comment' onChange={handleChange} />
        </div>
        <Button loading={isLoading} type='submit' className="mt-6 w-[80px]" size='sm' fullWidth>
          Submit
        </Button>
      </form>
    </div>
    }

    <div className='mt-5'>
      {reviews.map(({ _id, comment, rating,}) => {
        return <div key={_id} className=' space-y-1'>
          <h1 className='font-bold text-xl'>{username}</h1>
          <Rating value={rating} readonly />
          <p>{comment}</p>
        </div>
      })}
    </div>

  </div>
  )
}

export default ProductReview
