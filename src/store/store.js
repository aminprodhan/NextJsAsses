import { configureStore } from '@reduxjs/toolkit';
 // Import your reducers
 import reducer from './slices';
const store = configureStore({
 reducer: {
    counter:reducer,
 // Add more reducers as needed
 },
 });
export default store;