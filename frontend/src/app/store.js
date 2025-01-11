
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice'; // Add your slices here
import cartReducer from '../features/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer, // Register your reducers here
    cart: cartReducer,
  },
});

export default store;
