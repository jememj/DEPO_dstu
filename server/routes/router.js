import express from "express";

import {
  getAllArticles,
  getArticleById,
  getArticlesByTheme,
  getArticlesByRubric,
} from "../controllers/ArticlesControllers.js";
import {
  getCommentsById,
  postComment,
} from "../controllers/CommentsControllers.js";

const router = express.Router();

router.get("/articles", getAllArticles);
router.get("/articles/theme/:theme", getArticlesByTheme);
router.get("/articles/rubric/:rubric", getArticlesByRubric);

router.get("/article/:id", getArticleById);
router.get("/article/comments/:id", getCommentsById);
router.post("/article/comments", postComment);

export default router;
