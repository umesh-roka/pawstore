import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouteLayout from './ui/RouteLayout'
import Login from './features/auth/Login'
import Signup from './features/auth/Signup'
import Home from './features/Home/Home'
import Breed from './features/components/Breed'
import AddPetForm from './pets/AddPetForm'

const router = createBrowserRouter([{
path:'/',
element:<RouteLayout/>,
children:[
{index:true, element:<Home/>},
{path:'login',element:<Login/>},
{path:'signup',element:<Signup/>},
{path:'breed',element:<Breed/>},
{path:'addpet',element:<AddPetForm/>},

]
}])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
