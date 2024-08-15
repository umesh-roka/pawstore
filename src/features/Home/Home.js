import React from 'react'
import Caro from './Caro'

const Home = () => {
  return (
    <div class="grid sm:grid-cols-1 lg:grid-cols-2 justify-center lg:px-[200px] sm:py-[20px]  items-center bg-orange-100 gap-4">

  <div class="... lg:mt-20 lg:mb-20 sm:px-[110px] "><Caro/> </div>
  <div class="... sm:p-3 text-justify"><h1 className='font-bold sm:text-2xl lg:text-3xl mb-4'>EveryBody Needs A Friend In Life</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, est rem. Distinctio alias dolorem soluta molestias dolores provident blanditiis recusandae, asperiores, dicta eius neque similique. Consequuntur dignissimos odio facilis tempora magnam, placeat ipsa deserunt? Laudantium nulla, cupiditate nam saepe est beatae illum mollitia labore earum vel? Nulla quibusdam blanditiis in possimus voluptatum eaque cum, nobis veniam.</p>
  <button className=' px-2 py-1 bg-orange-500 rounded-lg mt-3'>Buy Me </button>
  </div>
 
</div>
  )
}

export default Home
