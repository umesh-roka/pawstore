import { Carousel } from "@material-tailwind/react";
import {  useGetTopPetQuery } from "../../Api/petApi";
import { imageUrl } from "../../constant/constant";

const Caro = () => {
  const {data} = useGetTopPetQuery();
  console.log(data);
  
  return (
<div >
   <Carousel loop autoplay className="rounded-full sm:w-[200px] sm:h-[200px] lg:w-[400px] lg:h-[400px] overflow-hidden">
  {data?.data.map(({ _id, pet_image }) => {
  return <img
    key={_id}
    src={`${imageUrl}${pet_image}`}
    alt="imag "
    className="h-full w-full object-cover rounded-full"
  />;
})}
 </Carousel>

 <div>

 </div>
  

</div>
  );
}

export default Caro;

