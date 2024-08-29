import React from 'react'
import Caro from './Caro'
import Breed from '../components/Breed'
import Accessories from '../components/Accessories'
import { Typography } from '@material-tailwind/react'

const Home = () => {
  return (
    <>
    <div class="grid sm:grid-cols-1 lg:grid-cols-2 justify-center lg:px-[200px] sm:py-[20px]  items-center bg-orange-100 gap-4">

  <div class="... lg:mt-20 lg:mb-20 sm:px-[110px] "><Caro/> </div>
  <div class="... sm:p-3 text-justify"><h1 className='font-bold sm:text-2xl lg:text-3xl mb-4'>EveryBody Needs A Friend In Life</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, est rem. Distinctio alias dolorem soluta molestias dolores provident blanditiis recusandae, asperiores, dicta eius neque similique. Consequuntur dignissimos odio facilis tempora magnam, placeat ipsa deserunt? Laudantium nulla, cupiditate nam saepe est beatae illum mollitia labore earum vel? Nulla quibusdam blanditiis in possimus voluptatum eaque cum, nobis veniam.</p>
  <button className=' px-2 py-1 bg-orange-500 rounded-lg mt-3'>Buy Me </button>
  </div>
</div>
<div>
 <Breed/>
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
 <div>
  <Accessories/>
 </div>

 
 
     


</>
  )
}

export default Home
