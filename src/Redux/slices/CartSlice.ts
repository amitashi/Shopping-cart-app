import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../Interfaces/Product"
import { RootState } from "../Store";

export interface IShopCart{
    cartItems:Product[];
    isCartOpen:boolean;
}

const initialState:IShopCart = {
    cartItems:new Array<Product>(),
    isCartOpen:false,
}

export const ShopCart = createSlice({
    name:"ShopCart",
    initialState,
    reducers:{
        setCartOpen(state,action:PayloadAction<boolean>){
            state.isCartOpen = action.payload
        },
        setCartItems(state,action:PayloadAction<Product[]>){
            state.cartItems = action.payload;
        }
        
    }
})

export const {setCartOpen,setCartItems} = ShopCart.actions;

export const CartItems = (state:RootState) => state.shopCart.cartItems;
export const IsCartOpen = (state:RootState) => state.ShopCartca.isCartOpen;

export default ShopCart.reducer;

