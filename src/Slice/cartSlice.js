
import { createSlice } from '@reduxjs/toolkit';
import { clearCartFromLocal, clearCartsFromLocal, getCartsFromLocal, setCartsToLocal } from '../shared/localstorage';


export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    carts: getCartsFromLocal(), // Initialize from local storage
  },
  reducers: {
    addCart: (state, action) => {
      const index = state.carts.findIndex(cart => cart.id === action.payload.id);
      if (index !== -1) {
        state.carts[index] = action.payload;
        setCartsToLocal(state.carts);
      }
      else
      {
        state.carts.push(action.payload);
        setCartsToLocal(state.carts);
      }
     
    },
    updateCart: (state, action) => {
     
    },
    removeFromCart: (state, action) => {
      state.carts.splice(action.payload, 1);
      setCartsToLocal([...state.carts]);
    },
    clearCarts: (state) => {
      state.carts = [];
      clearCartsFromLocal();
    },
    clearAll: (state) => {
      state.carts = [];
      clearCartFromLocal();
    },
    updateCartQuantity: (state, action) => {
      const { _id, qty } = action.payload;
      const cartItem = state.carts.find(item => item._id === _id);
      if (cartItem) {
        cartItem.qty = qty;
      }
    },
  },
});

export const { addCart, updateCart, removeFromCart, clearCarts, clearAll,updateCartQuantity } = cartSlice.actions;


