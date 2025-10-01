import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const AutoIncrement = AutoIncrementFactory(mongoose);

const productSchema = new mongoose.Schema({
    id: { type: Number, unique: true }, // thêm id tự tăng
    name: { type: String, required: true, trim: true, index: true },
    price: { type: Number, required: true, min: 0, index: true },
    description: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now }
});

// plugin auto-increment cho trường "id"
productSchema.plugin(AutoIncrement, { inc_field: "id" });

const Product = mongoose.model("Product", productSchema);

export default Product;
