📱 Ứng dụng Chat Realtime Phân Tán
📌 Giới thiệu

Đây là bài tập lớn xây dựng ứng dụng chat realtime phân tán sử dụng Node.js, MongoDB và frontend thuần HTML/CSS/JavaScript.
Hệ thống cho phép nhiều người dùng đăng ký, đăng nhập, gửi – nhận tin nhắn theo thời gian thực, đảm bảo xác thực và bảo mật dữ liệu.

Ứng dụng được xây dựng theo mô hình Client – Server, dễ mở rộng cho các hệ thống phân tán trong tương lai.

🛠️ Công nghệ sử dụng
Backend

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Token)

Frontend

HTML

CSS

JavaScript (Vanilla JS)

Công cụ hỗ trợ

Postman (test API)

Git & GitHub

MongoDB Compass

📦 Các thư viện chính (Dependencies)
"dependencies": {
  "bcryptjs": "^3.0.3",
  "cors": "^2.8.5",
  "dotenv": "^17.2.3",
  "express": "^5.2.1",
  "jsonwebtoken": "^9.0.3",
  "mongoose": "^9.1.1",
  "validator": "^13.15.26"
}

🔍 Mô tả thư viện

bcryptjs: Mã hóa mật khẩu người dùng

cors: Cho phép frontend và backend giao tiếp khác domain

dotenv: Quản lý biến môi trường

express: Framework xây dựng REST API

jsonwebtoken: Xác thực người dùng bằng JWT

mongoose: Kết nối & thao tác với MongoDB

validator: Kiểm tra dữ liệu đầu vào (email, password,…)

⚙️ Chức năng chính

🔐 Đăng ký / đăng nhập người dùng

🔑 Xác thực và phân quyền bằng JWT

💬 Gửi và nhận tin nhắn realtime

🗂️ Lưu trữ tin nhắn trong MongoDB

🌐 Hỗ trợ nhiều người dùng cùng lúc

📡 Kiến trúc hướng đến hệ thống phân tán

🗄️ Cấu trúc thư mục (tham khảo)
distributed-chat-app/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── config/
│   └── server.js
│
├── client/
│   ├── index.html
│   ├── css/
│   └── js/
│
├── .env
├── package.json
└── README.md


🧪 Kiểm thử

Test API đăng ký, đăng nhập bằng Postman

Kiểm tra lưu dữ liệu trên MongoDB

Test giao tiếp frontend – backend

📚 Mục tiêu học tập

Hiểu mô hình ứng dụng chat realtime

Nắm vững Node.js + MongoDB

Áp dụng JWT, mã hóa mật khẩu

Làm quen với hệ thống phân tán

Rèn luyện kỹ năng làm việc nhóm với Git

👨‍💻 Tác giả

Sinh viên: Phạm Văn Minh - 23010350

Môn học: …

Giảng viên hướng dẫn: …
