import {createSlice} from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState:{
       items: [],
    },
    reducers:{
        addItem:(state,action)=>{ 
          state.items.push(action.payload);
        },
        //modifies the cart acces to state and action
        removeItem:(state,action)=>{ 
            state.items.pop();
        },
        clearCart:(state,action)=>{
          state.items.length=0;
        },
    },
});
export const {addItem,removeItem,clearCart} = CartSlice.actions;

export default CartSlice.reducer;