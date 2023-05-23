import { ObjectId } from "../depts.ts";

export interface User{
    _id:ObjectId;
    username:string;
    password:string;
    name:string;
    addres:string;
    age:string;
    telphone:number;
    avatar:string
}