import { Router } from "express";

const productRouter = Router();

productRouter.get("/",(req,res)=>{
    res.send("Product");
})

export default productRouter;