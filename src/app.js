import express from "express";
import router from "./routers";
import morgan from "morgan";

const app = express();

// Middleware log request
// new Date().toLocaleTimeString() → lấy thời gian hiện tại (giờ:phút:giây).
// req.method → phương thức HTTP (GET, POST, PUT, DELETE...).
// req.url → đường dẫn mà client request.
const logRequestTime = (req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
};
app.use(logRequestTime);

// Dùng morgan để log trong chế độ dev
app.use(morgan('dev'));

// Middleware tích hợp để parse JSON: req.body
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.use: Sử dụng tiền tố Router: /posts
//Api tổng: index.js: localhost3000/api/...
app.use("/api/",router);

app.get("/",(req,res)=>{
    res.send("Chào mừng bạn tới trang bán hàng");
})

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
});