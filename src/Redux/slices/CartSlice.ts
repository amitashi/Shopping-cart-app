import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../Interfaces/Product"
import { RootState } from "../Store";

export interface IShopCartProduct{
    product:Product;
    quantity:number;
}

export interface IShopCart{
    cartItems:IShopCartProduct[];
    isCartOpen:boolean;
}

const initialState:IShopCart = {
    cartItems:new Array<IShopCartProduct>(),
    isCartOpen:false,
}

export const ShopCart = createSlice({
    name:"ShopCart",
    initialState,
    reducers:{
        setCartOpen(state,action:PayloadAction<boolean>){
            state.isCartOpen = action.payload
        },
        setCartItems(state,action:PayloadAction<IShopCartProduct[]>){
            state.cartItems = action.payload;
        }
    }
})

export const {setCartOpen,setCartItems} = ShopCart.actions;

export const ShoopingCartList = (state:RootState) => state.shoppingBag.cartItems
export const IsCartOpen = (state:RootState) => state.shoppingBag.isCartOpen;

export default ShopCart.reducer;

