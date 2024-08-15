import { Carousel } from "@material-tailwind/react";

const Caro = () => {
  return (
    <Carousel loop autoplay className="rounded-full sm:w-[200px] sm:h-[200px] lg:w-[400px] lg:h-[400px] overflow-hidden">
      <img
        src="https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/labrador-retriever-dog-breed-info.jpeg"
        alt="1"
        className="h-full w-full object-cover rounded-full"
      />
      <img
        src="https://cdn.britannica.com/69/234469-050-B883797B/Rottweiler-dog.jpg"
        alt="2"
        className="h-full w-full object-cover rounded-full"
      />
      <img
        src="https://image.petmd.com/files/inline-images/german-shepherd-3.jpg?VersionId=QrldSoaj4srcfCInIahiKcoLSh5D0gh8"
        alt="3"
        className="h-full w-full object-cover rounded-full"
      />
    </Carousel>
  );
}

export default Caro;
