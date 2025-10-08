import Joi from "joi";

// Schema tạo tác giả mới

export const createAuthorSchema = Joi.object({
    name: Joi.string().required().min(2).max(100).messages({
        "string.base": "Tên tác giả phải là chuỗi",
        "string.emty": "Tên tác giả không được để trống",
        "string.max": "Tên sản phẩm không được vượt quá {#limit} ký tự",
        "string.min": "Tên tác giả phải có ít nhất {#limit} ký tự",
        "any.required": "Tên tác giả là bắt buộc",
    }),
    bio: Joi.string().optional().max(500).messages({
        "string.base": "Tiểu sử tác giả phải là chuỗi",
        "string.max": "Tiểu sử không được vượt quá {#limit} ký tự",
    }),
    createdAt: Joi.date().default(()=> new Date()),
    // Tự gán ngày hiện tại
    updateAt: Joi.date().default(()=> new Date()),

});

// Schema cập nhật tác giả
export const updateAuthorSchema = Joi.object({
    name: Joi.string().min(2).max(100).optional().messages({
        "string.base": "Tên tác giả phải là chuỗi",
        "string.emty": "Tên tác giả không được để trống",
        "string.max": "Tên sản phẩm không được vượt quá {#limit} ký tự",
        "string.min": "Tên tác giả phải có ít nhất {#limit} ký tự",
    }),
    bio: Joi.string().max(500).optional().messages({
        "string.base": "Tiểu sử tác giả phải là chuỗi",
        "string.max": "Tiểu sử không được vượt quá {#limit} ký tự",
    }),
});

// fork: Hàm của Joi cho phép tùy chỉnh lại các field cụ thể của schema hiện có
// schema.fork(keys, adjuster)
// keys: các field muốn thay đổi, adjuster: hàm chỉnh sửa từng field