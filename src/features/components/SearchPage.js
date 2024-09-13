import React from 'react'
import SearchProduct from '../product/SearchProduct'
import SearchPet from '../pets/SearchPet'

const SearchPage = () => {

  return (
    <div>
   <h1 className='font-bold text-4xl uppercase text-center pt-6 '>Searched Item</h1>
    <SearchProduct/>
    <SearchPet/>
    </div>
    
  )
}

export default SearchPage
