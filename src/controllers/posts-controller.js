let posts = [
    {id: 1, title: "Đây là bài viết 1", content: "Nội dung bài viết 1"},
    {id: 2, title: "Bài viết 2", content: "Nội dung bài viết 2"},
];

// Lấy tất cả dữ liệu 
export function getAllPosts(req,res){
    // Trả về thêm 1 số dữ liệu cho người dùng
    res.json(posts);
}

// Tìm dữ liệu theo id
export function getPostById(req,res){
    const post = posts.find((p) => p.id === parseInt(req.params.id))
    if(!post){
        return res.json("Lỗi");
    }
    //     if(!post) return res.status(404).json({error: "Post not found"})
    res.json(post);
}

// Thêm dữ liệu
export function addPost(req,res){
    const {title,content} = req.body;
    const newPost = {id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,title,content}
    posts.push(newPost);
    res.json(newPost);
}

// Update dữ liệu
export function updatePost(req,res){
    const post = posts.find((p)=>p.id === parseInt(req.params.id))
    if(!post) return res.json("Không tìm thấy bài viết");
    const { title, content } = req.body || {};
    post.title = title ?? post.title;
    post.content = content ?? post.content;
    res.json(post)
}

// Xóa dữ liệu
export function deletePost(req,res){
    const index = posts.findIndex((p)=>p.id === parseInt(req.params.id));
    if(index === -1) return res.status(404).json({error: "Post not found"});

    posts.splice(index, 1); //Xóa 1 phần tử trong mảng posts tại vị trí index.
    res.json({success: true});
}

// Tìm dữ liệu
export function searchPost(req,res){
    // Query parameter search : Tham số truy vấn
    // ?search : ? <query string>
    const {search} = req.query;
    // filter : duyệt qua phần tử, trả về ptu true

    if(search){
        const filterPost = posts.filter((p)=> p.title.toLowerCase().includes(search.toLowerCase().trim()));
        console.log("Kết quả filter:", filterPost);
        return res.json(filterPost);
    }

    //.toLowerCase() chuyển toàn bộ tiêu đề thành chữ thường. <yc đề bài: 0 phân biệt hoa thường>
    // Ví dụ: "NodeJS Cơ Bản" → "nodejs cơ bản".

    // Substring nghĩa là một chuỗi con (một đoạn nhỏ) nằm trong một chuỗi lớn hơn.
    // Ví dụ: Chuỗi gốc: "Học NodeJS cơ bản"
    // Substring: "NodeJS", "cơ", "Học" đều là chuỗi con của chuỗi gốc.
    // Includes dùng để kiểm tra xem có chứa một giá trị (chuỗi con hoặc phần tử) hay không.
    // Ở đây, search.toLowerCase() cũng được chuyển thành chữ thường để so sánh không phân biệt hoa thường.
}
