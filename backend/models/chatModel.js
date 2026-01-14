const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    chatName: {
        type: String,
        trim: true
    },
    isGroupChat: {
        type: Boolean,
        default: false
    },
    lastestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
},
{ timestamps: true }
);

module.exports = mongoose.model("Chat", ChatSchema)