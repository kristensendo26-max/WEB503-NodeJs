import Author from "../models/Author";


export const getAuthors = async (req,res) =>{
    try {
        const authors = await Author.find();
        return res.json(authors);
    } catch (error) {
        return res.status(500).json({error: "Lỗi server", message: error.message});
    }
}

export const addAuthor = async (req,res) =>{
    try {
        const newAuthor = await Author.create(req.body)
        return res.json({
            message: "Thêm thành công",
            data: newAuthor
        })
    } catch (error) {
        return res.json({message: error});
    }
}



export const getAuthorById = async (req,res) =>{
    try {
        const author = await Author.findById(req.params.id);
        if (!author) {
            return res.status(404).json({ message: "Không tìm thấy tác giả" });
        }
        return res.json(author);
    } catch (error) {
        return res.json({message: error})
    }
}



export const updateAuthor = async (req,res) =>{
    try {
        const author = await Author.findById(req.params.id);
        if (!author) {
            return res.status(404).json({ message: "Không tìm thấy tác giả" });
        }
        const {name, bio} = req.body || {};
        author.name = name ?? author.name;
        author.bio = bio ?? author.bio;
        

        return res.json(author);
    } catch (error) {
        return res.json({message: error})
    }
}


export const deleteAuthor = async (req, res) => {
    try {
        const deletedAuthor = await Author.findOneAndDelete(req.params.id);
        
        if (!deletedAuthor) {
            return res.json("Không tìm thấy tg để xóa");
        }

        return res.json({
            message: "Xóa tg thành công"
        });
    } catch (error) {
        return res.json({ message: error });
    }
};