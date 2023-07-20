import { createSlice } from '@reduxjs/toolkit';
const cartReducer = createSlice({
    name: 'cart',
    initialState: {
        items:[{
            product_id:1,
            name:'P1',
            qty:2,
            image:''
        }]
    },
    reducers: {
        increment: (state,params) => {
            const payload=params.payload.payload;
            //console.log('pay=',params.payload.payload);
             const isExist=state.find((item) => item.product_id == payload.id);
             if(isExist == undefined){ 
                state=state.concat({
                    product_id:payload.id,
                    name:'P1',
                    qty:2,
                    image:''
                }) 
            }
            return state;
        },
        decrement: (state) => state - 1,
    },
 });
export const { increment, decrement } = cartReducer.actions;
export default cartReducer.reducer;