import { Router } from "express";
import router from ".";
import {addPost, deletePost, getAllPosts, getPostById, searchPost, updatePost} from '../controllers/posts-controller'

const postRouter = Router();

// let posts = [
//     {id: 1, title: "Bài viết 1", content: "Nội dung bài viết 1"},
//     {id: 2, title: "Bài viết 2", content: "Nội dung bài viết 2"},
// ];

// GET /api/posts - Lấy danh sách bài viết
postRouter.get("/", getAllPosts);

// GET /api/posts/:id - Lấy chi tiết bài viết
postRouter.get("/:id", getPostById);

// POST /api/posts - Thêm bài viết
postRouter.post("/", addPost);

// PUT /api/posts/:id - Cập nhật bài viết
postRouter.put("/:id", updatePost);

// DELETE /api/posts/:id - Xóa bài viết
postRouter.delete("/:id", deletePost)

// SEARCH
// postRouter.get("/", searchPost)
postRouter.get("/", searchPost)

 

export default postRouter;



