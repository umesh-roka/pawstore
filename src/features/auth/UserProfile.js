import React from 'react'
import UserOrder from '../order/UserOrder'
import UserDetail from '../user/UserDetail'


const UserProfile = () => {
  return (
    <>
    <div className='grid sm:grid-cols-1 lg:grid-cols-2 my-5 mx-[50px]'>
      <div>
        <UserDetail/>
      </div>
     <div>
      <h1 className='font-bold text-2xl text-gray-700 uppercase mb-3'>All Orders</h1>
     <UserOrder/>
     </div>
   
    </div>
   
   </>
  )
}

export default UserProfile
