// backend/models/User.js
const mongoose = require('mongoose');

// 1. Định nghĩa Schema (Cái khuôn đúc)
const UserSchema = new mongoose.Schema({
  username: { 
    type: String,     // Phải là chữ
    required: true,   // Bắt buộc phải điền
    unique: true      // Không được trùng với người khác
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
    // Lưu ý: Mật khẩu 6 ký tự vẫn là String
  },
  avatar: {
    type: String,
    default: "" // Nếu không có ảnh thì để rỗng
  },
}, 
{ timestamps: true } // Tự động tạo 2 cột: ngày tạo (createdAt) và ngày sửa (updatedAt)
);

// 2. Đóng gói thành Model và xuất ra
module.exports = mongoose.model('User', UserSchema);