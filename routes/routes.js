const express = require("express");
const {
    fetchAllPosts,
    fetchPostById,
    createPost,
    updatePost,
    deletePost,
} = require("../controllers/api");
const router = express.Router();

router.get("/", fetchAllPosts);
router.get("/:id", fetchPostById);
router.post("/", createPost);
router.patch("/:id",  updatePost);
router.delete("/:id", deletePost);

module.exports = router;
