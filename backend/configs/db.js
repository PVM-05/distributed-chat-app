const mongoose = require('mongoose') 

const connectDB = async() => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/distributed-chat-app');

        console.log('Ket noi thanh cong')
        
    } catch (error) {
        console.error("Loi ket noi")
        process.exit(1)
    }

}

module.exports = connectDB;