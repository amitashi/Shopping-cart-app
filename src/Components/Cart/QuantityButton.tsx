import { Box, IconButton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IShopCartProduct, setCartItems, ShoopingCartList } from '../../Redux/slices/CartSlice';
import { useAppDispatch, useAppSelector } from '../../Redux/hook';

export interface QuantityButton{
    item:IShopCartProduct;
}

enum QuantityAction{
    Add="add",
    Substract="subtract"
}

const QuantityButton = ({item}:QuantityButton) => {
    const shopCartItems = useAppSelector(ShoopingCartList)
    const dispatch = useAppDispatch();


    const handleQuantityButtonClick=(action:QuantityAction)=>{
        // const targetItem = shopCartItems.filter(cartItem=>cartItem.product.id === item.product.id);
        // if(targetItem[0]){
        //     const modifiedTarget:IShopCartProduct = {
        //         quantity:action===QuantityAction.Add?targetItem[0].quantity + 1:targetItem[0].quantity - 1,
        //         product:targetItem[0].product,
        //     }
        //     const restCartItems:IShopCartProduct[] = shopCartItems.filter(cartItem=>cartItem.product.id!==item.product.id)
        //     if(modifiedTarget.quantity>0){
        //         const newCartItems:IShopCartProduct[] = [...restCartItems,modifiedTarget];
        //         dispatch(setCartItems(newCartItems));
        //     }
        //     else{
        //         const newCartItems:IShopCartProduct[] = [...restCartItems];
        //         dispatch(setCartItems(newCartItems));
        //     }
           
        // }
        const modifiedCartItems:IShopCartProduct[] = shopCartItems.map(cartItem=>{
            if(cartItem.product.id===item.product.id){
                return {
                    product:cartItem.product,
                    quantity:action===QuantityAction.Add?cartItem.quantity + 1:cartItem.quantity - 1
                }
            }
            return cartItem;
        }).filter(item=>item.quantity>0);
        dispatch(setCartItems(modifiedCartItems));
    }

    const QuantityIconStyle = {
        width:"1.25rem",
        color:"white",
        background:"grey",
        px:"4px"
    }

    const QuantityButtonStyle = {
       p:0
    }
    

  return (
    <Box
    sx={{
        display:"flex",
        height:'1.5rem',
        // width:'6rem',
        alignItems:"center",
        gap:1,
        justifyContent:"space-between",
        // background:"grey",
        border:"1px solid grey",
        p:0
    }}
    >
        <IconButton
        onClick={()=>handleQuantityButtonClick(QuantityAction.Substract)}
        sx={QuantityButtonStyle}
        >
        <RemoveIcon 
        sx={QuantityIconStyle}
        />
        </IconButton>
        <Typography
        sx={{
            // background:"yellow",
            fontSize:"1rem",
            fontWeight:400,

        }}
        >
            {item.quantity}
        </Typography>
        <IconButton
        onClick={()=>handleQuantityButtonClick(QuantityAction.Add)}
         sx={QuantityButtonStyle}
        >
            <AddIcon  sx={QuantityIconStyle}/>
        </IconButton>
    </Box>
  )
}

export default QuantityButton
