import Product from "../models/Product";

// Lấy tất cả sản phẩm
// export const getProducts = async (req,res) =>{
//     try {
//         const products = await Product.find();
//         return res.json(products);
//     } catch (error) {
//         return res.json("Lỗi hiển thị sản phẩm")
//     }
// }

// Lấy tất cả sản phẩm (có phân trang, tìm kiếm, lọc)
export const getProducts = async (req, res) => {
    try {
        // Lấy query params
        const { _page = 1, _limit = 10, name, minPrice, maxPrice } = req.query;

        // Tạo bộ lọc
        let filter = {};

        // Tìm theo tên (không phân biệt hoa thường)
        if (name) {
            filter.name = { $regex: name, $options: "i" }; 
        }

        // Lọc theo giá
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = parseFloat(minPrice);
            if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
        }

        // Tính skip (bỏ qua bao nhiêu sp)
        const page = parseInt(_page) || 1;
        const limit = parseInt(_limit) || 10;
        const skip = (page - 1) * limit;

        // Query dữ liệu
        const [products, total] = await Promise.all([
            Product.find(filter)
                .skip(skip)
                .limit(limit)
                .select("-_id -__v"), // ẩn _id và __v
            Product.countDocuments(filter)
        ]);

        return res.json({
            data: products,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


// Thêm sản phẩm
export const addProduct = async (req,res) =>{
    try {
        const newProduct = await Product.create(req.body)
        return res.json({
            message: "Thêm thành công",
            data: newProduct
        })
    } catch (error) {
        return res.json({message: error});
    }
}

// Tìm sản phẩm theo id
export const getProductById = async (req,res) =>{
    try {
        const product = await Product.findOne({ id: parseInt(req.params.id) }).select("-_id -__v"); // ẩn _id và __v
        if (!product) {
            return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
        }
        return res.json(product);
    } catch (error) {
        return res.json({message: error})
    }
}

// Update sản phẩm

export const updateProduct = async (req,res) =>{
    try {
        const product = await Product.findOne({ id: parseInt(req.params.id) }).select("-_id -__v"); // ẩn _id và __v
        if (!product) {
            return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
        }
        const {name, price, description} = req.body || {};
        product.name = name ?? product.name;
        product.price = price ?? product.price;
        product.description = description ?? product.description;

        return res.json(product);
    } catch (error) {
        return res.json({message: error})
    }
}

// Xóa sản phẩm
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findOneAndDelete({ id: parseInt(req.params.id) }).select("-_id -__v");
        
        if (!deletedProduct) {
            return res.json("Không tìm thấy sản phẩm để xóa");
        }

        return res.json({
            message: "Xóa sản phẩm thành công"
        });
    } catch (error) {
        return res.json({ message: error });
    }
};
