// backend/server.js
const express = require('express');
const dotenv = require('dotenv');

// 1. [MỚI] Gọi file kết nối DB vào
const connectDB = require('./configs/db');

dotenv.config();

// 2. [MỚI] Thực hiện kết nối
connectDB(); 

const app = express();
// 3. Cho phép server đọc hiểu dữ liệu JSON (cực quan trọng)
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Sever dang chay tai cong ${PORT}`);
});