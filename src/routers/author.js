import { Router } from "express";
import { addAuthor, deleteAuthor, getAuthorById, getAuthors, updateAuthor } from "../controllers/authorController";

const authorRouter = Router();


productRouter.get('/', getAuthors);


productRouter.get('/:id', getAuthorById);


productRouter.post('/', addAuthor);


productRouter.put('/:id', updateAuthor);


productRouter.delete('/:id', deleteAuthor);



export default authorRouter;