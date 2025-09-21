import { Router } from "express";
import productRouter from "./products";
import userRouter from "./user";
import postRouter from "./posts";



const router = Router();

// router.get("/", (req,res)=>{
//     res.send("Index");
// });

// router.use("/api/posts",postRouter);
// router.use("/api/user",userRouter);

// localhost3000/api/(posts,user.product)

//Post
router.use("/posts",postRouter);

//User
router.use("/user",userRouter);

//Product
router.use("/product",productRouter);

export default router;

// Có tác vụ gần giống app.js, trợ lý của app.js