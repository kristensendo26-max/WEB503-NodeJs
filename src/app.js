import express from "express";

const app = express();

// Route tên 
app.get("/api/posts/greet", (req, res) => { // Call back nhận 2 tham số request, response

  // req: du lieu gui tu client (fe)
  // res: du lieu tu server tra ve (fe)
  // request
  const name = req.query.name

  res.send(`Hi ${name}`);
});

// Route tính tổng
app.get("/api/posts/sum", (req, res) => {

  const number1 = Number(req.query.number1)
  const number2 = Number(req.query.number2)
  const tong = number1 + number2
  res.send(`Sum: Tổng của ${number1} và ${number2} là ${tong}`);
});

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
});