import Joi from "joi";

export const validateRequest = (schema, target = "body") => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req[target], {
            abortEarly: false,
            stripUnknown: true,
        });

        if (error) {
            return res.status(400).json({
                error: "Dữ liệu không hợp lệ",
                details: error.details.map((err) => err.message),
            });
        }

        req[target] = value;
        next();
    };
};

// Middleware validateRequest kiểm tra dữ liệu từ req.body, req.params, hoặc req.query.
// Loại bỏ trường không hợp lệ (stripUnknown) và trả về lỗi chi tiết nếu không hợp lệ.