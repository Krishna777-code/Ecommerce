// frontend/src/redux/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cartItems: cartItemsFromStorage,
  shippingAddress: {}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find(x => 
        x._id === item._id && 
        x.size === item.size && 
        x.color === item.color
      );

      if (existItem) {
        state.cartItems = state.cartItems.map(x =>
          x._id === existItem._id && 
          x.size === existItem.size && 
          x.color === existItem.color
            ? item
            : x
        );
      } else {
        state.cartItems.push(item);
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const { id, size, color } = action.payload;
      state.cartItems = state.cartItems.filter(x => 
        !(x._id === id && x.size === size && x.color === color)
      );
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    updateCartQuantity: (state, action) => {
      const { id, size, color, quantity } = action.payload;
      const item = state.cartItems.find(x => 
        x._id === id && x.size === size && x.color === color
      );
      if (item) {
        item.quantity = quantity;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('cartItems');
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem('shippingAddress', JSON.stringify(action.payload));
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  updateCartQuantity,
  clearCart,
  saveShippingAddress
} = cartSlice.actions;

export default cartSlice.reducer;