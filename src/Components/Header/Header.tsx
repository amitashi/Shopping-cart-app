import React from 'react';
import { Avatar, Badge, Box, Button, Typography } from '@mui/material'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ShoopingCartList, IShopCartProduct, setCartOpen } from '../../Redux/slices/CartSlice';
import { useAppDispatch, useAppSelector } from '../../Redux/hook';

const Header = () => {
    const shopCartItems = useAppSelector(ShoopingCartList)
    const dispatch = useAppDispatch();
    const getTotalCartItemCount = ()=>{
        return (
            shopCartItems.reduce((acc:number, cur:IShopCartProduct)=> acc + cur.quantity,0)
        )
    }
    const openCart = ()=>{
        dispatch(setCartOpen(true));
    }

  return (
    <Box
    sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        py:2,
        px:4,
        background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(23,23,62,1) 35%, rgba(37,39,71,1) 100%)",
        position:"fixed",
        left:0,
        right:0,
        top:0,
        zIndex:9999

    }}
    >
        <Box
           sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            gap:2
        }}
        >
            <Avatar 
            variant='square'
            sx={{
                background:"transparent",
                width:"3rem",
                height:"3rem",
                
            }}>
                <ShoppingBagIcon sx={{color:"#22c1c3", fontSize:"3rem"}}/>
            </Avatar>
            <Typography variant='h3' sx={{WebkitTextFillColor:"transparent", WebkitBackgroundClip:"text", 
                background:"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)" , 
                backgroundClip:"text", fontSize:{xs:"1.5rem", md:"3rem",}, verticalAlign:"middle" }}>Shopping Cart</Typography>
        </Box>
        <Button onClick={openCart} sx={{backrgound:"transparent" , ":hover":{background:"transparent"}}}>
        <Badge badgeContent={<Typography sx={{color:"white"}}>{getTotalCartItemCount()}</Typography>} color='secondary'>
            <AddShoppingCartIcon color="action" sx={{
                fontSize:"2rem",
                color:"#22c1c3"
            }} />
        </Badge>
        </Button>
    </Box>
  )
}

export default Header
