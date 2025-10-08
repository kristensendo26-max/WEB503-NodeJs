import { Router } from "express";
import { addAuthor, deleteAuthor, getAuthorById, getAuthors, updateAuthor } from "../controllers/authorController";
import { validateRequest } from "../middleware/validateRequest";
import { createAuthorSchema, updateAuthorSchema } from "../validation/author.validation";

const authorRouter = Router();


authorRouter.get('/', getAuthors);


authorRouter.get('/:id', getAuthorById);

// Thêm tác giả
authorRouter.post('/', validateRequest(createAuthorSchema), addAuthor);

// Cập nhật tác giả 
authorRouter.put('/:id', validateRequest(updateAuthorSchema), updateAuthor);


authorRouter.delete('/:id', deleteAuthor);



export default authorRouter;