import { ProductRating } from "./ProductRating";

export interface Product{
    id:number;
    title:string;
    price:number;
    category:string;
    description:string;
    imageUrl:string;
    rating: ProductRating;
}