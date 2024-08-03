import React, { useEffect } from 'react'
import { Box, CircularProgress, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../Redux/hook';
import { fetchCStoreProducts, IsProductsLoading, Products } from '../../Redux/slices/ProductsSlice';
import { Product } from '../../Interfaces/Product';

const ShopProducts = () => {
    const products = useAppSelector(Products);
    const isLoading = useAppSelector(IsProductsLoading)
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchCStoreProducts({isLoading:true}))    
    },[])
  
    if(isLoading){
      return (
        <CircularProgress color="secondary" />
      )
    }
  return (
    <Box>
        {
            products.map((product:Product)=>(
                <Typography key={product.id} >{product.title}</Typography>
            ))
        }
    </Box>
  )
}

export default ShopProducts;
