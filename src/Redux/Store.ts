import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';

import ProductsList from "./slices/ProductsSlice"
import { ShopCart } from './slices/CartSlice';



const rootReducer = combineReducers({
    productsList: ProductsList,
    shopCart:ShopCart,
});



export const store = configureStore({
	reducer: rootReducer,
    middleware:(getDefaultMiddleware)=>  getDefaultMiddleware().concat(thunk)
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
