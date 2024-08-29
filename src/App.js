import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouteLayout from './ui/RouteLayout'
import Login from './features/auth/Login'
import Signup from './features/auth/Signup'
import Home from './features/Home/Home'
import Breed from './features/components/Breed'
import PetDetail from './features/pets/PetDetail'
import AddPetForm from './features/pets/AddPetForm'
import AdminPet from './features/pets/AdminPet'
import PetEdit from './features/pets/PetEdit'
import CartPage from './features/carts/CartPage'
import OrderPage from './features/order/OrderPage'
import AddProductForm from './features/product/AddProductForm'
import AdminProduct from './features/product/AdminProduct'
import ProductEdit from './features/product/ProductEdit'
import Accessories from './features/components/Accessories'



const router = createBrowserRouter([{
path:'/',
element:<RouteLayout/>,
children:[
{index:true, element:<Home/>},
{path:'login',element:<Login/>},
{path:'signup',element:<Signup/>},
{path:'pets',element:<Breed/>},
{path:'addpet',element:<AddPetForm/>},
{path:'adminpet',element:<AdminPet/>},
{path:'petedit/:id',element:<PetEdit/>},
{path:'petdetail/:id',element:<PetDetail/>},
{path:'cartpage',element:<CartPage/>},
{path:'orderpage',element:<OrderPage/>},

{path:'addproduct',element:<AddProductForm/>},
{path:'adminproduct',element:<AdminProduct/>},
{path:'productedit/:id',element:<ProductEdit/>},
{path:'Accessories',element:<Accessories/>},









]
}])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
