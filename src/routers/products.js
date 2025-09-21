import { Router } from "express";

const productRouter = Router();

const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 }
];

//Hiển thị và lọc sản phẩm
productRouter.get("/",(req,res)=>{
    let result = products;
    const max = req.query.max;
    if(max){
        // Lọc sp có giá <= giá max
        result = products.filter((p)=>p.price <= Number(max))
    }

    res.send(result);
})

//Tìm sp theo chữ cái
productRouter.get("/search",(req,res)=>{
    let result = products;
    const namePro = req.query.name;
    if(namePro){
        // Lọc sp tìm theo chữ cái
        result = products.filter((p)=>p.name.includes(String(namePro)))
    }
    res.send(result);
})

// Param id
productRouter.get("/detail/:id",(req,res)=>{
    const { id } = req.params;
    // Tìm sp có id = id tìm trên thanh công cụ
    const product = products.find((p)=>p.id === Number(id))
    // const product = products.find((p)=>p.id === Number(2))
    if(!product){
        res.send("Không tìm thấy sp theo id");
    }
    res.send(product);
})

// Param name 
productRouter.get("/detail",(req,res)=>{
    console.log(req.query?.name);
    res.send("Product:" + req.query?.name);
})



export default productRouter;