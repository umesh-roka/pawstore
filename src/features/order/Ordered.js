import React from 'react'
import { useGetAllorderQuery } from '../../Api/orderApi'

const Ordered = () => {
  const {data} = useGetAllorderQuery();
  console.log(data);
  return (
    <div>
      hello
    </div>
  )
}

export default Ordered
