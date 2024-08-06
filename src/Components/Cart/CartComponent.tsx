import React from 'react'
import { useAppDispatch, useAppSelector } from '../../Redux/hook'
import { IsCartOpen, setCartOpen, ShoopingCartList } from '../../Redux/slices/CartSlice'
import { Box, Drawer, Typography } from '@mui/material';

const CartComponent = () => {
    const isCartOpen = useAppSelector(IsCartOpen);
    const shopCartItems = useAppSelector(ShoopingCartList)
    const dispatch = useAppDispatch();

  return (
    <Drawer
    anchor={'right'}
    open={isCartOpen}
    onClose={()=>dispatch(setCartOpen(false))}
    sx={{
        width:"40vw",
        zIndex:9999
    }}
  >
   <Box sx={{
    width:"50vw",
   }}>
    {shopCartItems.map(item=>(
        <Typography>
            {item.product.title}
        </Typography>
    ))}
   </Box>
  </Drawer>
  )
}

export default CartComponent
