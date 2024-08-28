
import { createSlice } from '@reduxjs/toolkit';
import { clearCartFromLocal, clearCartsFromLocal, getCartsFromLocal, setCartsToLocal } from '../shared/localstorage';


export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    carts: getCartsFromLocal(), // Initialize from local storage
  },
  reducers: {
    addCart: (state, action) => {
      state.carts.push(action.payload);
      setCartsToLocal(state.carts);
    },
    updateCart: (state, action) => {
      const index = state.carts.findIndex(cart => cart.id === action.payload.id);
      if (index !== -1) {
        state.carts[index] = action.payload;
        setCartsToLocal(state.carts);
      }
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
  },
});

export const { addCart, updateCart, removeFromCart, clearCarts, clearAll } = cartSlice.actions;


