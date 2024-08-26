
import { useParams } from 'react-router';
import PetEditForm from './PetEditForm';
import { useGetPetByIdQuery } from '../../Api/petApi';

const PetEdit = () => {
  const { id } = useParams();
  const {data, isLoading, error} = useGetPetByIdQuery(id);
  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <div>
   <PetEditForm  data={data?.data}/>
    </div>
  )
}

export default PetEdit;




