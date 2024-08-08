import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Product } from "../../Interfaces/Product";

class ProductAPIService{
    api:string;
    config:AxiosRequestConfig;

    constructor(){
        this.api="https://fakestoreapi.com/";
        this.config = {
            headers:{
                "Content-Type":"application/json-patch+json",
                accept: 'text/plain'
            },
            withCredentials: false
        };
    }

    getProductList():Promise<AxiosResponse<Product[]>>{
        const url = `${this.api}products`;
        return axios.get<Product[]>(url,this.config)
    }
    
    getProductDetails(id:number):Promise<AxiosResponse<Product>>{
        const url = `${this.api}products/${id}`;
        return axios.get<Product>(url,this.config)
    }

}

export default new ProductAPIService(); 