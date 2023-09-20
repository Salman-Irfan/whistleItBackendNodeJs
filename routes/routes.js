const express = require("express");
const {
    fetchAllPosts,
    fetchPostById,
    createPost,
    updatePost,
    deletePost,
} = require("../controllers/api");
const router = express.Router();
const multer = require("multer");

// multer middleware

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});

let upload = multer({
    storage: storage,
}).single("image");

router.get("/", fetchAllPosts);
router.get("/:id", fetchPostById);
router.post("/", upload, createPost);
router.patch("/:id", upload, updatePost);
router.delete("/:id", deletePost);

module.exports = router;
