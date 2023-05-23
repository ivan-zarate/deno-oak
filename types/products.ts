import { ObjectId } from "../depts.ts";

export interface Product{
    _id:ObjectId;
    name:string;
    description:string;
    code:number;
    url:string;
    price:number;
    stock:number;
    incart:boolean
}