import Joi from "joi";

// Schema tạo tác giả mới

export const createAuthorSchema = Joi.object({
    name: Joi.string().required().max(200).messages({
        "string.base": "Tên tác giả phải là chuỗi",
        "string.emty": "Tên tác giả không được để trống",
        "string.max": "Tên sản phẩm không được vượt quá {#limit} ký tự",
        "any.required": "Tên tác giả là bắt buộc",
    }),
    bio: Joi.string().optional().messages({
        "string.base": "Tiểu sử tác giả phải là chuỗi",
    }),
    createdAt: Joi.date().default(()=> new Date()),
    // Tự gán ngày hiện tại
    updateAt: Joi.date().default(()=> new Date()),

});

// Schema cập nhật tác giả
export const updateAuthorSchema = createAuthorSchema.fork(
    ["name", "bio"],
    (schema) => schema.optional()
);

// fork: Hàm của Joi cho phép tùy chỉnh lại các field cụ thể của schema hiện có
// schema.fork(keys, adjuster)
// keys: các field muốn thay đổi, adjuster: hàm chỉnh sửa từng field