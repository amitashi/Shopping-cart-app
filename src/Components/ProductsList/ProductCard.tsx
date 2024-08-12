import React from "react";
import {Box, ButtonBase, Chip, Typography } from "@mui/material";
import { Product } from "../../Interfaces/Product";
import ClampedTypography from "../../Common/ClamppedTypography";
import RatingStars from "./RatingStars";
// import { useAppSelector } from "../../Redux/hook";
// import { ShoopingCartList, IShopCartProduct, setCartItems } from "../../Redux/slices/CartSlice";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "../Cart/AddToCartButton";





export interface IProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: IProductCardProps) => {

  // const shopCartItems = useAppSelector(ShoopingCartList)
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleCardClick = (e:React.MouseEvent)=>{
    e.stopPropagation();
    navigate(`/detail/${product.id}`)
  }

  // const AddToCart=(e:React.MouseEvent)=>{
  //   e.stopPropagation();
  //   const restList = shopCartItems.filter((item:IShopCartProduct)=>item.product.id!==product.id)
  //   const newCartItem:IShopCartProduct = {
  //     quantity:1,
  //     product:product,
  //   }
  //   const existingItem = shopCartItems.filter((item:IShopCartProduct)=>item.product.id===product.id)
  //   if(existingItem.length>0){
  //     newCartItem.quantity += existingItem[0].quantity
  //   }
  //   dispatch(setCartItems([...restList,newCartItem]))
  // }

  return (
    <ButtonBase
    onClick={(e)=>handleCardClick(e)}
    >
      <Box
      key={product.id}
      sx={{
        height: "35rem",
        width: "22rem",
        boxShadow: 4,
        borderRadius:1,
        transition:"all ease-in-out",
        ":hover":{
          transform:"scale(1.02)"
        }
      }}
    >
      {/* Product image */}
     <Box 
     sx={{
      display:"flex",
      justifyContent:"center",
      height:"40%",
      width: "100%",
      alignItems:"center",
      position:"relative",
      ":hover":{
        ".image_product" :{
          transform:"scale(1.05)"
      }}
     }} 
     >
      <img
        src={product.image}
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
        opacity:0.1
      }}>
        
      </Box>
     </Box>
     {/* product content */}
     <Box
     sx={{
      p:2,
      height:"55%",
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"space-between",
      gap:1
     }}
     >
      <Chip label={product.category.toUpperCase()} sx={{
        background:"lightgrey",
      }} variant="filled" />
     <ClampedTypography clampAt={1} sx={{
      fontSize:"1.5rem",
      textAlign:"left",
      fontFamily:"Roboto",
      letterSpacing:"1px",
      textTransform:"capitalize",
      fontWeight:500,
      color:"rgba(2,0,36,1)"
      
     }}>{product.title}</ClampedTypography>
     <ClampedTypography 
     sx={{
      fontSize:"1rem",
      textTransform:"capitalize",
      lineHeight:"1.25rem",
      opacity:0.8,
      textAlign:"left"

      
     }} clampAt={4}>
      {product.description}
     </ClampedTypography>
     <Typography
     sx={{
      fontSize:"1.75rem",
      fontWeight:500,
      color:"rgba(2,0,36,1)",
     }}
     >
      ${product.price.toFixed(2)}
     </Typography>
     <RatingStars productRating={product.rating}/>
     <AddToCartButton product={product}/>
     </Box>
    </Box>
    </ButtonBase>
  );
};

export default ProductCard;
