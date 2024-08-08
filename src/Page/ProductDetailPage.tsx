import { Box, Button, Chip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Product } from '../Interfaces/Product';
import ProductAPIService from '../Utils/APIServices/ProductAPIService';
import Response from '../Utils/Response';
import RatingStars from '../Components/ProductsList/RatingStars';
import AddToCartButton from '../Components/Cart/AddToCartButton';

const ProductDetailPage = () => {
    let {id} = useParams();
    const navigate = useNavigate();
    const [product,setProduct] = useState<Product|undefined>(undefined)
    const [isLoading,setIsLoading] = useState<boolean>(false)
    useEffect(()=>{
      const getProductDetais = async (productId:number)=>{
        try{
          setIsLoading(true);
          const result = await ProductAPIService.getProductDetails(productId);
        const response = await new Response(result);
        if(response.isSuccessful()){
          setProduct(response.getData());
          setIsLoading(false);
        
        }
        }
        catch{
          setProduct(undefined);
          setIsLoading(false);
        }
      }
      if(id){
        getProductDetais(parseInt(id));
      }
    },[])

    const ReturnButton = ()=>{
      return (
        <Button
    variant='outlined'
    onClick={()=>navigate(`/`)}
    sx={{ml:4, my:2,
      color:"white",
      background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(23,23,62,1) 35%, rgba(37,39,71,1) 100%)",
    }}
      >
        Go Back
      </Button>
      )
    }

    if(isLoading || !product){
      return (
        <ReturnButton/>
      )
    }
  return (
    <>
    <ReturnButton/>
    <Box
    sx={{
      p:4,
      mt:4,
      display:"flex",
      gap:8,
      // justifyContent:"center"
    }}
    >

      {/* left side image box */}
      <Box
      sx={{
        width:"30vw",
        height:"60vh",
        boxShadow:1,
        borderRadius:2
      }}
      >
        {/* <img/> */}
        <Box 
      sx={{
        display:"flex",
        justifyContent:"center",
        height:"100%",
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
      </Box>
      {/* right side descriptionbox */}
      <Box
      sx={{
        maxWidth:"40vw",
        display:"flex",
        flexDirection:"column",
        gap:2
      }}
      >
        <Typography variant='h4' sx={{
          fontWeight:600,
        }}>
        {product.title}
        </Typography>
        <Typography variant='h6' sx={{
          fontWeight:400,
          opacity:"0.8"
        }}>
        {product.description}
        </Typography>
        <Chip label={product.category.toUpperCase()} 
        sx={{
          background:"lightgrey",
          maxWidth:"30%",
          fontSize:"1rem"
        }} 
        variant="filled" />
      <RatingStars productRating={product.rating} sx={{fontSize:"1.75rem"}}/>
        <Typography variant='h4' sx={{
          fontWeight:500,
          fontSize:"2.5rem"
        }}>
        Price: ${product.price}
        </Typography>
       <AddToCartButton product={product}/>
      </Box>
    </Box>
    </>
  )
}

export default ProductDetailPage