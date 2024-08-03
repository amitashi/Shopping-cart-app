import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../Interfaces/Product"
import { RootState } from "../Store";
import ProductAPIService from "../../Utils/APIServices/ProductAPIService";
import Response from "../../Utils/Response";

export interface IProductSlice{
    products:Product[];
    isLoading:boolean;
    isError:boolean;
}

const initialState:IProductSlice = {
    products :[],
    isLoading:false,
    isError:false,
}

export const fetchCStoreProducts = createAsyncThunk<
  void,
  {isLoading:boolean},
  { state: RootState }
>(
  "ProductsSlice/fetchProductsList",
  async (params:{isLoading:boolean},{dispatch}) => {
      try {
        dispatch(setLoading(params.isLoading))
        const result = await ProductAPIService.getProductList();
        const response = new Response(result);

        if (response.isSuccessful()) {
            const data: Product[] = response.getData();
            dispatch(setProducts(data));

          if (params.isLoading) dispatch(setLoading(false));
        }
      } catch {
        if (params.isLoading) dispatch(setLoading(false));
            dispatch(setError(true));
      }
    }
);





export const ProductsList = createSlice({
    name:"ProductsList",
    initialState,
    reducers:{
        setLoading(state,action:PayloadAction<boolean>){
            state.isLoading = action.payload
        },
        setError(state,action:PayloadAction<boolean>){
            state.isError = action.payload
        },
        setProducts(state,action:PayloadAction<Product[]>){
            state.products = action.payload;
        }
        
    }
})

export const {setLoading,setProducts,setError} = ProductsList.actions;

export const Products = (state:RootState) => state.productsList.products;
export const IsProductsLoading = (state:RootState) => state.productsList.isLoading;
export const IsError = (state:RootState) => state.productsList.isError;

export default ProductsList.reducer;