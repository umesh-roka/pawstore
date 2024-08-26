
// add user to local
export const addUserToLocal = (user)=>{
localStorage.setItem('user', JSON.stringify(user));
}


export const getUserFromLocal = ()=>{
  const user = localStorage.getItem('user');
  return user === null ? user : JSON.parse(user);
}


export const celarUser = ()=>{
  localStorage.clear();
}


// add carts to local


export const setCartsToLocal = (carts)=>{
  localStorage.setItem('carts', JSON.stringify(carts));
}


export const  getCartsFromLocal = ()=>{
const carts = localStorage.getItem('carts');
return carts === null ?[]:JSON.parse(carts);
}

export const clearCartsFromLocal =()=>{
localStorage.removeItem('carts');
}

export const clearCartFromLocal = ()=>{
  localStorage.clear();
}