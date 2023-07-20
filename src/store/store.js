import { configureStore } from '@reduxjs/toolkit';
 // Import your reducers
 import reducer from './slices';
 import cartReducer from './cartReducer';
const store = configureStore({
 reducer: {
    counter:reducer,
    cart:cartReducer
 // Add more reducers as needed
 },
 });
export default store;