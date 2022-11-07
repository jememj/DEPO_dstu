import commentsModel from "../models/commentsModel.js";

export const getCommentsById = async (req, res) => {
  try {
    const comments = await commentsModel.findAll({
      where: {
        articleId: req.params.id,
      },
    });
    res.json(comments);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const postComment = async (req, res) => {
  try {
    const comment = await commentsModel.bulkCreate([req.body.data]);
    console.log("req.body", req.body);
    res.json(comment);
  } catch (error) {
    res.json({ message: error.message });
  }
};
