import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  Avatar,
  MenuList,
  MenuItem,
  Collapse,
  Badge,
} from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDownIcon, Cog6ToothIcon, PowerIcon, ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import { userLogout } from "../Slice/userSlice";
import { useFormik } from "formik";
 
// userProfile



const userProfile = [
  { label: "My Profile", icon: UserCircleIcon, value: 'profile' },
  { label: "Sign Out", icon: PowerIcon, value: 'logout' },
];

const adminProfile = [
  { label: "My Profile", icon: UserCircleIcon, value: 'profile' },
  { label: "Edit Profile", icon: Cog6ToothIcon, value: 'setting' },
  { label: "Sign Out", icon: PowerIcon, value: 'logout' },
];

function ProfileMenu({ user }) {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const menuitems = user.isAdmin ? adminProfile : userProfile;

  const handleClick = (val) => {
    switch (val) {
      case 'profile':
        nav('/userprofile')
        break;
      case 'products':
        nav('/allProducts');
        break;
      case 'logout':
        dispatch(userLogout());
        nav('/');
        break;
      default:
    }
    closeMenu();
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="User Avatar"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {menuitems.map(({ label, icon, value }, key) => {
          const isLastItem = key === menuitems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => handleClick(value)}
              className={`flex items-center gap-2 rounded ${isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""}`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}



const Header =()=> {
  const {carts} = useSelector((state)=>state.cartSlice);
  const totalItems = carts.reduce((sum, item) => sum + (Array.isArray(item) ? item.length : 1), 0);
  
  const nav = useNavigate();
  const [openNav, setOpenNav] = React.useState(false);
  const {user} = useSelector((state)=>state.userSlice);
  const formik = useFormik({
    initialValues:{
      query:'',
    },
    onSubmit: (val,resetForm)=>{
      if(val.query){
        nav(`/search-page/${val.query}`);
      }
     nav('/')
    }
  })


  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center  font-bold text-lg lg:gap-6">
      <Typography
        as="li"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
       <NavLink>Home</NavLink>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        {user ? (user.isAdmin ? <NavLink to = '/adminpet'>Pets</NavLink>:<NavLink to ='/pets'>Pets</NavLink>) : <NavLink to ='/pets'>Pets</NavLink>}
        
        
       
       
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
    
      {user ? (user.isAdmin ? <NavLink to = '/adminproduct'>Accessories</NavLink>:<NavLink to ='/accessories'>Accessories</NavLink>) : <NavLink to ='/accessories'>Accessories</NavLink>}
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
       <NavLink>Blog</NavLink>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
       <NavLink>Contact</NavLink>

       </Typography>

       {/* search */}
       <div className="hidden items-center  gap-x-2 lg:flex">
       <form onSubmit={formik.handleSubmit}>
          <div className="relative flex w-full gap-2 md:w-max">
         
          <div className="">
            <Input
              type="search"
              name="query"
              onChange={formik.handleChange}
              value={formik.values.query}
              placeholder="Search"
              containerProps={{
                className: "min-w-[288px]",
              }}
              className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-orange-500"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="!absolute left-3 top-[13px]">
              <svg
                width="13"
                height="14"
                
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                  fill="#90A4AE"
                />
                <path
                  d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                  stroke="#CFD8DC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill=""
                />
              </svg>
            </div>
          </div>
          <Button type="submit" size="md" className="rounded-lg ">
            Search
          </Button>
          
          </div>
          </form>

              {/* cart */}
              <NavLink to='/cartpage'>         
       {totalItems > 0 ? <Badge content={totalItems} color="orange">
      <IconButton>
        <ShoppingCartIcon className="h-4 w-4" />
      </IconButton>
    </Badge>: 
      <IconButton>
        <ShoppingCartIcon className="h-4 w-4" />
      </IconButton>
   }
</NavLink>


{/* login */}

{user ? (<ProfileMenu user = {user}/>):(<NavLink to='login' className=''>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</NavLink>)}
        </div>
     
    </ul>
  );
 
  return (
    <div className="sticky top-0 z-50">
    <Navbar className=" bg-orange-100 px-4 rounded-none py-2 lg:px-8 lg:py-4">
   
      <div className="flex lg:mx-[180px] flex-wrap items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-bold sm:lg lg:text-2xl uppercase"
        >
          PawSotre
        </Typography>

        {/* mobile device search */}

        <div className=" lg:hidden w-[100px] items-center  gap-x-2 ">
       <form onSubmit={formik.handleSubmit}>
          <div className="relative flex w-full gap-2 md:w-max">
         
          <div className="">
            <Input
              type="search"
              name="query"
              onChange={formik.handleChange}
              value={formik.values.query}
              placeholder="Search"
              containerProps={{
                className: "",
              }}
              className=" !border-t-blue-gray-300 w-[100px] h-[30px] pl-9 placeholder:text-blue-gray-300 focus:!border-orange-500"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="!absolute left-3 top-[10px]">
              <svg
                width="14"
                height="14"
                
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                  fill="#90A4AE"
                />
                <path
                  d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                  stroke="#CFD8DC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill=""
                />
              </svg>
            </div>
          </div>
          <button type="submit"  className="rounded-lg bg-black text-white  px-3 uppercase h-[30px] w-[0px]">
            Search
          </button>
          
          </div>
          </form>


        </div>
     
        <div className="hidden lg:block">{navList}</div>
       
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
      {/* cart */}
       <NavLink to='/cartpage'>         
       {totalItems > 0 ? <Badge content={totalItems} color="orange">
      <IconButton>
        <ShoppingCartIcon className="h-4 w-4" />
      </IconButton>
    </Badge>: 
      <IconButton>
        <ShoppingCartIcon className="h-4 w-4" />
      </IconButton>
   }
</NavLink>


{/* login */}
          {user ? (<ProfileMenu user = {user}/>):(<NavLink to='login' className=''>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" color="black" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</NavLink>)}
          <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
          </div>
        </div>
      </Collapse>
    </Navbar>
    </div>
  );
}

export default Header;