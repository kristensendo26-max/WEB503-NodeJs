import { Router } from "express";
import productRouter from "./productRoutes.js";
import userRouter from "./user";
import postRouter from "./posts";
import authorRouter from "./author.js";



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
router.use("/products",productRouter);

//Author
router.use("/author",authorRouter);

export default router;

// Có tác vụ gần giống app.js, trợ lý của app.js