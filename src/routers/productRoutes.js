import { Router } from "express";
import { addProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controllers/productController";

const productRouter = Router();

// Danh sách sản phẩm: Get/http://localhost:3000/api/products/
productRouter.get('/', getProducts);

// Danh sách sản phẩm tìm theo id: Get/http://localhost:3000/api/products/1
productRouter.get('/:id', getProductById);

// Thêm sản phẩm: Post/http://localhost:3000/api/products/
productRouter.post('/', addProduct);

// Cập nhật sản phẩm: Put/http://localhost:3000/api/products/1
productRouter.put('/:id', updateProduct);

// Xóa sản phẩm: Delete/http://localhost:3000/api/products/1
productRouter.delete('/:id', deleteProduct);



export default productRouter;