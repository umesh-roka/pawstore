import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouteLayout from './ui/RouteLayout'
import Login from './features/auth/Login'
import Signup from './features/auth/Signup'
import Home from './features/Home/Home'

const router = createBrowserRouter([{
path:'/',
element:<RouteLayout/>,
children:[
{index:true, element:<Home/>},
{path:'login',element:<Login/>},
{path:'signup',element:<Signup/>}
]
}])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
