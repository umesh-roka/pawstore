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
import ProductDetail from './features/product/ProductDetail'
import UserOrder from './features/order/UserOrder'
import OrderDetail from './features/order/OrderDetail'
import UserProfile from './features/auth/UserProfile'
import SearchPage from './features/components/SearchPage'
import NotFoundPage from './ui/NotFoundPage'
import Contact from './features/components/Contact'
import About from './features/components/About'
import UsersFeedback from './features/user/UsersFeedback'
import UserRoutes from './ui/UserRoutes'
import AdminRoutes from './ui/AdminRoutes'
import UserSecRoutes from './ui/UserSecRoutes'



const router = createBrowserRouter([{
path:'/',
element:<RouteLayout/>,
children:[

  {element:<UserRoutes/>,
    children:[
      {path:'login',element:<Login/>},
      {path:'signup',element:<Signup/>},


    ]
  },

  {element:<AdminRoutes/>,
    children:[
      {path:'addpet',element:<AddPetForm/>},
      {path:'adminpet',element:<AdminPet/>},
      {path:'petedit/:id',element:<PetEdit/>},
      {path:'addproduct',element:<AddProductForm/>},
      {path:'adminproduct',element:<AdminProduct/>},
      {path:'productedit/:id',element:<ProductEdit/>},
      {path:'feedback',element:<UsersFeedback/>},

    ]
  },
  {
    element:<UserSecRoutes/>,
    children:[
      {path:'userorder',element:<UserOrder/>},
      {path:'order/:id',element:<OrderDetail/>},
      {path:'orderpage',element:<OrderPage/>},
      {path:'userprofile',element:<UserProfile/>},
    ]
  },


{index:true, element:<Home/>},
{path:'cartpage',element:<CartPage/>},

{path:'pets',element:<Breed/>},
{path:'petdetail/:id',element:<PetDetail/>},
{path:'productdetail/:id',element:<ProductDetail/>},
{path:'Accessories',element:<Accessories/>},
{path:'search-page/:query',element:<SearchPage/>},
{path:'contact',element:<Contact/>},
{path:'about',element:<About/>},




{path:'*',element:<NotFoundPage/>}
















]
}])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
