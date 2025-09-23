import { Router } from "express";

const postRouter = Router();

let posts = [
    {id: 1, title: "Bài viết 1", content: "Nội dung bài viết 1"},
    {id: 2, title: "Bài viết 2", content: "Nội dung bài viết 2"},
];

// GET /api/posts - Lấy danh sách bài viết
postRouter.get("/", (req,res)=>{
    // body: title
    res.json(posts);
    
});

// GET /api/posts/:id - Lấy chi tiết bài viết
postRouter.get("/:id", (req,res)=>{
    const post = posts.find((p)=>p.id === parseInt(req.params.id));
    if(!post) return res.status(404).json({error: "Post not found"})
    res.json(post);
    
});

// POST /api/posts - Thêm bài viết
postRouter.post("/", (req,res)=>{
    const {title,content} = req.body;
    const newPost = {id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1, title, content};
    // Lệnh này thêm bài viết mới vào mảng.
    posts.push(newPost);
    // http 201: create thành công 
    res.status(201).json(newPost);
    
});

// PUT /api/posts/:id - Cập nhật bài viết
postRouter.put("/:id", (req,res)=>{
    const post = posts.find((p)=>p.id === parseInt(req.params.id));
    if(!post) return res.status(404).json({error: "Post not found"});

    const {title, content} = req.body;
    post.title = title || post.title;
    post.content = content || post.content;

    res.json(post);
    
});

// DELETE /api/posts/:id - Xóa bài viết
postRouter.delete("/:id", (req,res)=>{
    const index = posts.findIndex((p)=>p.id === parseInt(req.params.id));
    if(index === -1) return res.status(404).json({error: "Post not found"});

    posts.splice(index, 1);
    res.json({success: true});
})
 

export default postRouter;

// postRouter.post("/", (req,res)=>{
//     // body: title
//     console.log(req.body);
//     res.json({ body: req.body });
    
// });


