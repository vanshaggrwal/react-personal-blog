

import express from "express";
import BlogModel from "../Models/BlogModel.js";
import { markBlogAsSpecial } from "./write.js";

const router = express.Router();

router.get("/special-blogs", async (req, res) => {
  try {
    // Check if the user is logged in
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Retrieve the special blogs for the logged-in user
    const specialBlogs = await BlogModel.find({ isSpecial: true, createdBy: req.user._id });

    res.render("special-blogs", { specialBlogs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/mark-blog-as-special", markBlogAsSpecial);

export default router;