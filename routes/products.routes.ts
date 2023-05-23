import {Router} from "../depts.ts";
import { getAllProducts, getProduct, createProduct, deleteProduct,updateProduct } from "../handlers/products.handlers.ts";

export const productRouter = new Router()
.get("/products", getAllProducts)
.get("/product/:name", getProduct)
.post("/products", createProduct)
.patch("/products/:uid", updateProduct)
.delete("/products/:uid", deleteProduct)