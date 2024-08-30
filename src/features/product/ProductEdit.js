import React from 'react'
import { useParams } from 'react-router';
import { useGetProductByIdQuery } from '../../Api/productApi';
import ProductEditForm from './ProductEditForm';

const ProductEdit = () => {
  const{id}= useParams();
  const {data,isLoading} = useGetProductByIdQuery(id);
  if(isLoading){
    return <h1>loading</h1>
  }
  
  return (
    <div>
      <ProductEditForm data = {data?.data}/>
    </div>
  )
}

export default ProductEdit;
