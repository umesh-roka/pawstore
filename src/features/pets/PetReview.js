import { Button, Rating, Textarea } from '@material-tailwind/react'
import { useFormik } from 'formik'
import React from 'react'
import { useAddReviewMutation } from '../../Api/petApi'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const PetReview = ({id,reviews}) => {
  const{user} = useSelector((state)=>state.userSlice);
  console.log(reviews);

  const [addReview,{isLoading}] = useAddReviewMutation();
  const{handleSubmit,handleChange,setFieldValue} = useFormik({
    initialValues:{
    rating:0,
    comment:'',
    },
    onSubmit:async (val)=>{
   try {
    await addReview({
      body:{
        rating:val.rating,
        comment:val.comment
      },
      id,
      token:user.token
    }).unwrap()
    toast.success('review added successfully')
   } catch (err) {
    toast.error('failded to add review')
   }
      
    }
  })
  return (
    <div className='space-y-2 sm:p-4 lg:p-7'>

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
      {reviews.map(({ _id, comment, rating, user }) => {
        return <div key={_id} className=' space-y-1'>
          <h1 className='font-bold text-xl'>{user.username}</h1>
          <Rating value={rating} readonly />
          <p>{comment}</p>
        </div>
      })}
    </div>

  </div>
  )
}

export default PetReview
