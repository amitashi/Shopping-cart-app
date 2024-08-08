import { Button } from '@mui/material'
import React from 'react'
import { Product } from '../../Interfaces/Product';
import { IShopCartProduct, setCartItems, ShoopingCartList } from '../../Redux/slices/CartSlice';
import { useAppDispatch, useAppSelector } from '../../Redux/hook';

export interface IAddToCartButtonProps{
    product:Product;
    sx?:object;

}

const AddToCartButton = ({product,sx}:IAddToCartButtonProps) => {
    const shopCartItems = useAppSelector(ShoopingCartList)
  const dispatch = useAppDispatch();
    const AddToCart=(e:React.MouseEvent)=>{
        e.stopPropagation();
        const restList = shopCartItems.filter((item:IShopCartProduct)=>item.product.id!==product.id)
        const newCartItem:IShopCartProduct = {
          quantity:1,
          product:product,
        }
        const existingItem = shopCartItems.filter((item:IShopCartProduct)=>item.product.id===product.id)
        if(existingItem.length>0){
          newCartItem.quantity += existingItem[0].quantity
        }
        dispatch(setCartItems([...restList,newCartItem]))
      }
  return (
    <Button
    onClick={(e)=>AddToCart(e)}
    color="primary"
    variant="contained"
    sx={{
    width:"100%",
      mt:1,
      background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(23,23,62,1) 35%, rgba(37,39,71,1) 100%)",
      ...sx
    }}
    >
     Add to Cart
    </Button>
  )
}

export default AddToCartButton
