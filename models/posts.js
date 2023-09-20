const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },
        created: {
            type: Date,
            default: Date.now,
        }
    },
);

const Posts = mongoose.model("Posts", postSchema);
module.exports = Posts;
