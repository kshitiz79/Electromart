// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to store cart items
  totalQuantity: 0, // Total number of items in the cart
  totalPrice: 0, // Total price of items in the cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += parseFloat(newItem.currentPrice);
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          discount: newItem.discount,
          currentPrice: parseFloat(newItem.currentPrice),
          originalPrice: parseFloat(newItem.originalPrice),
          rating: newItem.rating,
          reviews: newItem.reviews,
          quantity: 1,
          totalPrice: parseFloat(newItem.currentPrice),
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += parseFloat(newItem.currentPrice);
    },

    // Remove an item from the cart
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    // Decrease item quantity
    decreaseItemQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.currentPrice;

        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.currentPrice;

        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },

    increaseItemQuantity: (state, action) => {
        const id = action.payload;
        const existingItem = state.items.find((item) => item.id === id);
  
        if (existingItem) {
          existingItem.quantity += 1;
          existingItem.totalPrice += existingItem.currentPrice;
  
          state.totalQuantity += 1;
          state.totalPrice += existingItem.currentPrice;
  
          if (existingItem.quantity === 0) {
            state.items = state.items.filter((item) => item.id !== id);
          }
        }
      },

    // Clear the entire cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, decreaseItemQuantity, clearCart,increaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
