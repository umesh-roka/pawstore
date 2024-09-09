import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useGetProductQuery } from "../../Api/productApi";
 
const ProductPagination =({active,setActive})=> {

  const {data,isloading,error} = useGetProductQuery({page:active});

  useEffect(()=>{
    return window.scrollTo(0,0);
  },[active])

  const total = data?.total  || 0;
  const numShow = Math.max(Math.ceil(total / 10), 1);
  
  const getItemProps = (index) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
    });
 
  const next = () => {
    if (active === 2) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };
 
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
    {[...Array(numShow).keys()].map((c)=>{
      return <IconButton key={c+1} {...getItemProps(c+1)}>{c+1}</IconButton>
    })}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === numShow}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>

  )
  
}

export default ProductPagination;


