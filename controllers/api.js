const Posts = require("../models/posts");
const fs = require("fs");
// fetch all posts
const fetchAllPosts = async (req, res) => {
    try {
        const posts = await Posts.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
// fetch post by id
const fetchPostById = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Posts.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
// create a post
const createPost = async (req, res) => {
    const post = req.body;
    const imagename = req.file.filename;
    post.image = imagename;
    try {
        await Posts.create(post);
        res.status(200).json({
            message: "post created successfully",
            post: post,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
// update a post
const updatePost = async (req, res) => {
    const id = req.params.id;
    let newImage = "";
    // if you want to update image
    if (req.file) {
        newImage = req.file.filename;
    }
    // create a new post
    const newPost = req.body;
    newPost.image = newImage;
    // use try and catch to update in db
    try {
        await Posts.findByIdAndUpdate(id, newPost);
        res.status(200).json({
            message: "post updated successfully",
            post: newPost,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
// delete a post

const deletePost = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Posts.findByIdAndDelete(id);
        res.status(200).json({
            message: "post deleted successfully",
            post: result,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    fetchAllPosts,
    fetchPostById,
    createPost,
    updatePost,
    deletePost,
};
