import { useEffect } from 'react'
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../Redux/hook';
import { fetchCStoreProducts, IsProductsLoading, Products } from '../../Redux/slices/ProductsSlice';
import { Product } from '../../Interfaces/Product';
import ProductCard from './ProductCard';
import LoadingScreen from '../../Common/LoadingScreen';

const ShopProducts = () => {
    const products = useAppSelector(Products);
    const isLoading = useAppSelector(IsProductsLoading)
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchCStoreProducts({isLoading:true}))    
    },[])
  

    const renderContent = ()=>{
      if(isLoading){
        return (
          <LoadingScreen/>
        )
      }
      return (
        <Box 
        sx={{
          display:"flex",
          gap:{xs:4,lg:2},
          flexWrap:"wrap",
          alignItems:"flex-start",
          justifyContent:"center",
          padding:"10px 0px 30px 0px",
          marginBottom:20,
        }}
        >
           {
                products.map((product:Product)=>(
                  <ProductCard key={product.id} product={product}
                  />
                    
                ))
            }
        </Box>
      )
    }

    
  return (
    <Box 
    sx={{
      left:0,
      right:0,
      p:2,
     
      
    }}
    >
      {renderContent()}
    </Box>
  )
}

export default ShopProducts;
