import articleModel from "../models/articleModel.js";

export const getAllArticles = async (req, res) => {
  try {
    const articles = await articleModel.findAll();
    res.json(articles);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const getArticlesByTheme = async (req, res) => {
  try {
    const articles = await articleModel.findAll({
      where: {
        theme: req.params.theme,
      },
    });
    res.json(articles);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const getArticlesByRubric = async (req, res) => {
  try {
    const articles = await articleModel.findAll({
      where: {
        rubric: req.params.rubric,
      },
    });
    res.json(articles);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getArticleById = async (req, res) => {
  try {
    const articles = await articleModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(articles[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
