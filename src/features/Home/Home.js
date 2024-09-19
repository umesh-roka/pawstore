import React from 'react'
import Caro from './Caro'
import Breed from '../components/Breed'
import Accessories from '../components/Accessories'
import { Button, Typography } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FeedBack from '../components/FeedBack'

const Home = () => {

  const {user}= useSelector((state)=>state.userSlice);
  return (
    <>
    <div class="grid sm:grid-cols-1 lg:grid-cols-2 justify-center lg:px-200px] sm:py-[20px]  items-center sm:pt-10 bg-orange-100 gap-4">
  <div class=" lg:mt-20 lg:mb-20 lg:mr-20 sm:px-[110px] "><Caro/> </div>
  <div class="... sm:p-3 text-justify"><h1 className='font-bold sm:text-2xl lg:text-3xl mb-4'>EveryBody Needs A Friend In Life</h1>
  <p className=''>Welcome to PawStore, your trusted source for finding the perfect canine or feline companion. Specializing exclusively in dogs and cats, we offer a variety of healthy, well-cared-for breeds along with a wide range of pet accessories, including premium food, grooming supplies, toys, and stylish apparel. Our mission is to help you build a strong bond with your new pet by providing expert advice and high-quality products. Whether you’re looking for a playful pup, a cuddly kitten, or the best accessories to pamper them, PawStore is here to support you every step of the way.</p>
  <NavLink to='/contact'><button className=' px-2 py-1 bg-orange-500 rounded-lg mt-3'>Contact Us </button></NavLink>
  </div>
</div>
<div className='bg-gray-100'>
 <Breed/>
 {user ? (user.isAdmin?'':<NavLink to='/pets'>
  <Button className='uppercase sm:ml-[150px] lg:mx-[750px] my-[20px]'>See more</Button>
  </NavLink>):<NavLink to='/pets'>
  <Button className='uppercase sm:ml-[150px] lg:mx-[750px] my-[20px]'>See more</Button>
  </NavLink>}
 </div>
 <figure className="relative h-96 my-7 ">
       <img
         className="h-full   object-cover w-full object-center"
         src="https://www.k9ofmine.com/wp-content/uploads/2019/08/nature-dog-names.jpg"
         alt="nature img"
       />
       <figcaption className="absolute bottom-8 left-12  ">
         <div>
           <Typography variant="h5"  color="white">
           "Unspoken love, endless loyalty—where paws meet hearts, a bond is forever formed."
           </Typography>
           </div>
       </figcaption>
     </figure>
 <div className='bg-orange-200'>
  <Accessories/>
  {user?(user.isAdmin ?'':<NavLink to='/accessories'>
  <Button className='uppercase sm:ml-[150px] lg:mx-[700px] my-[20px]'>See more</Button>
  </NavLink>):<NavLink to='/accessories'>
  <Button className='uppercase sm:ml-[150px] lg:mx-[700px] my-[20px]'>See more</Button>
  </NavLink>}

 </div>
 <figure className="relative h-96 my-7 ">
       <img
         className="h-full   object-fill w-full object-center"
         src="https://mymodernmet.com/wp/wp-content/uploads/2020/12/dog-photography-audrey-bellot-3.jpg"
         alt="nature img"
       />
       <figcaption className="absolute bottom-8 left-12  ">
         <div>
           <Typography variant="h5"  color="white">
           "Pets and humans share a friendship where every moment is a silent promise of unconditional love."
           </Typography>
           </div>
       </figcaption>
     </figure>
 
    <div>
      <FeedBack/>
    </div>

</>
  )
}

export default Home
