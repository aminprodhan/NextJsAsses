import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart:[]
    },
    reducers: {
        addToCartBulk:(state,param)=>{
            const { payload } = param;
            payload.forEach(element => {
                state.cart.push({
                    product_id:element.product_id.id,
                    name:element.product_id.name,
                    qty:element.qty,
                    price:element.price,
                    image:'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg'
                });
            });
        },
        addToCart:(state,param)=>{

            const { payload } = param;
            state.cart = [...state.cart, {
                product_id:payload.id,
                name:payload.name,
                qty:1,
                price:payload.dis_price,
                image:'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg'
            }];
        },
        increment: (state,param) => {
                const { payload } = param;
                console.log(payload);
                const item = state.cart.find((item) => item.product_id == payload.id);
                item.qty++;
        },
        decrement: (state,param) => {
            const { payload } = param;
            const item = state.cart.find((item) => item.product_id == payload.id);
            if (item.qty == 1) {
                item.qty = 1
            } else {
                item.qty--;
            }
        },
        removeItem: (state, param) => {
            const { payload } = param;
            const removeItem = state.cart.filter((item) => item.product_id != payload.product_id);
            console.log(payload.id);
            state.cart = removeItem;
        },
    },
 });
export const cartReducer = cartSlice.reducer;
export const {
    increment, decrement,addToCart,removeItem,addToCartBulk
} = cartSlice.actions;
