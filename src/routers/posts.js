import { Router } from "express";

const postRouter = Router();

postRouter.get("/", (req,res)=>{
    res.send("Hello");
});

export default postRouter;

