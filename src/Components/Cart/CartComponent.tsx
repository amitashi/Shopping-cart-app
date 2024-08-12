import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../Redux/hook'
import { IsCartOpen, setCartItems, setCartOpen, ShoopingCartList } from '../../Redux/slices/CartSlice'
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Avatar from '@mui/material/Avatar';
import CartItemCard from './CartItemCard';
import CloseIcon from '@mui/icons-material/Close';

const CartComponent = () => {
  const [cartInfo,setCartInfo] = useState({
    totalQty:0,
    grandTotal:0,
  })
    const isCartOpen = useAppSelector(IsCartOpen);
    const shopCartItems = useAppSelector(ShoopingCartList)
    const dispatch = useAppDispatch();

    const removeFromCart = (Id:number)=>{
      const newCartItems = shopCartItems.filter(item=>item.product.id !== Id);
      dispatch(setCartItems(newCartItems));
    }

    useEffect(()=>{
      const newCartInfo = {
        grandTotal:shopCartItems.reduce((acc,cur)=>acc+(cur.product.price*cur.quantity),0),
        totalQty:shopCartItems.reduce((acc,cur)=>acc+cur.quantity,0)
      }
      setCartInfo(newCartInfo);
    },[shopCartItems])
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
    width:{xs:"90vw", md:"70vw",lg:"40vw"},
    p:2
   }}>
    <Box
    sx={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center"
    }}
    >
    <Typography variant='h3' sx={{color:"rgba(2,0,36,1)", fontWeight:600}}>Cart Items</Typography>
    <IconButton 
   sx={{
    mr:2
   }}
    onClick={()=>dispatch(setCartOpen(false))}
    >
      <CloseIcon 
       sx={{
        fontSize:"2rem"
      }}
      />
    </IconButton>
    </Box>
    <Box
    sx={{
      p:2,
    }}
    >
      {shopCartItems.length===0 && 
      <Box sx={{
        mt:10,
        height:"50%",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        background:"transparent"
      }}>
        <Avatar
        sx={{
          background:"transparent",
          color:"rgba(2,0,36,1)",
          height:"5rem",
          width:"5rem",
        }}
        >
          <LocalMallOutlinedIcon sx={{
            height:"5rem",
            width:"5rem",
          color:"rgba(2,0,36,1)",
            stroke:1
          }}/>
          </Avatar>
        <Typography sx={{
          fontSize:"2.5rem"
        }}>Your Cart Is Empty</Typography>
        </Box>
      }
    {shopCartItems.length>0 && <>
    <Box
    sx={{
      px:4,
      py:2,
      display:"flex",
      flexDirection:{xs:"column",lg:"row"},
      justifyContent:"space-between",
      alignItems:{xs:"flex-start",lg:"center"},
      background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(23,23,62,1) 35%, rgba(37,39,71,1) 100%)',
      borderRadius:4,
      gap:2,
      position:"sticky",
      top:0,
      zIndex:9999
    }}
    >
      <Typography
      sx={{
        WebkitTextFillColor:"transparent", 
        WebkitBackgroundClip:"text", 
        background:"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)" , 
        backgroundClip:"text", 
        fontSize:"1.5rem",
        lineHeight:"2rem",
        fontWeight:500,
        // color:"rgba(2,0,36,1)"
      }}
      >Checkout Price: ${cartInfo.grandTotal.toFixed(2)}</Typography>
      <Typography
      sx={{
        WebkitTextFillColor:"transparent", 
        WebkitBackgroundClip:"text", 
        background:"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)" , 
        backgroundClip:"text", 
        fontSize:"1.5rem",
        lineHeight:"2rem",
        fontWeight:500,
        // color:"rgba(2,0,36,1)"
      }}
      >Total Qty: {cartInfo.totalQty} {cartInfo.totalQty>1?"Items":"Item"}</Typography>
    </Box>
    {
      shopCartItems.map(item=>(
        <CartItemCard key={item.product.id} item={item} removeFromCart={removeFromCart} />
    ))
    }
    </>}
    </Box>
   </Box>
  </Drawer>
  )
}

export default CartComponent
