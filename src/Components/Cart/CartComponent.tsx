import React from 'react'
import { useAppDispatch, useAppSelector } from '../../Redux/hook'
import { IsCartOpen, setCartItems, setCartOpen, ShoopingCartList } from '../../Redux/slices/CartSlice'
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import ClampedTypography from '../../Common/ClamppedTypography';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const CartComponent = () => {
    const isCartOpen = useAppSelector(IsCartOpen);
    const shopCartItems = useAppSelector(ShoopingCartList)
    const dispatch = useAppDispatch();

    const removeFromCart = (Id:number)=>{
      const newCartItems = shopCartItems.filter(item=>item.product.id !== Id);
      dispatch(setCartItems(newCartItems));
    }
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
    width:"40vw",
    p:2
   }}>
    <Typography variant='h3' sx={{color:"rgba(2,0,36,1)", fontWeight:600}}>Cart Items</Typography>
    <Box
    sx={{
      p:2,
    }}
    >
    {shopCartItems.map(item=>(
        <Box key={item.product.id}
        sx={{
          height:"15vh",
          width:"95%",
          marginX:"auto",
          boxShadow:2,
          my:2,
          borderRadius:2,
          display:"flex",
          alignItems:"flex-start",
          
        }}
        >
          <Box 
     sx={{
      display:"flex",
      justifyContent:"center",
      height:"100%",
      width: "30%",
      alignItems:"center",
      position:"relative",
      ":hover":{
        ".image_product" :{
          transform:"scale(1.01)"
      }}
     }} 
     >
      <img
        src={item.product.image}
        alt="Product_img"
        className="image_product"
        style={{
          height:"90%",
          width: "90%",
          // border: "1px solid lightgrey",
          objectFit:"contain",
          padding:"16px",
          margin:"8px",
        }}
      />
      <Box sx={{
        position:"absolute",
        width:"100%",
        height:"100%",
        background:"linear-gradient(180deg, rgba(230,232,239,1) 4%, rgba(244,244,247,1) 40%, rgba(155,155,156,1) 77%, rgba(134,134,135,1) 100%)",
        opacity:0.2
      }}></Box>
          </Box>
         <Box sx={{
          gap:1,
          background:"rgba(2,0,36,0.1)",
          width:"100%",
          height:"100%",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          borderRadius:1,
          borderTopLeftRadius:0,
          borderBottomLeftRadius:0
         }}>
        <Box 
        sx={{
          p:2,
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between",
          alignItems:"flex-start",
        }}
        >
       {/* <Tooltip title={`${item.product.title}`}> */}
       <ClampedTypography clampAt={1} sx={{
          fontWeight:500,
          fontSize:"1.25rem",
          color:"rgba(2,0,36,1)",
          opacity:0.9
         }}>
            {item.product.title}
        </ClampedTypography>
       {/* </Tooltip> */}
        <Typography
        sx={{
          fontSize:"1rem",
          lineHeight:"1.5rem",
          fontWeight:600,
          color:"rgba(2,0,36,1)",
          opacity:0.7


        }}
        >
            Price: ${(item.product.price*item.quantity).toFixed(2)}
        </Typography>
        <Typography
        sx={{
          color:"rgba(2,0,36,1)",
          fontSize:"1rem",
          lineHeight:"1.5rem",
          fontWeight:600,
          opacity:0.7


        }}
        >
            Qty: {item.quantity}
        </Typography>
          </Box>
        <Box
        sx={{
          p:2,
          
        }}
        >

        <IconButton 
        onClick={()=>removeFromCart(item.product.id)}
        >
        <DeleteOutlineOutlinedIcon sx={{color:"rgba(2,0,36,1)", fontSize:"2rem"}}/>
       </IconButton>
       </Box>
          </Box>
          
          </Box>
    ))}
    </Box>
   </Box>
  </Drawer>
  )
}

export default CartComponent