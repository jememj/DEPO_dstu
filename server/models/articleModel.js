import { Sequelize } from "sequelize";

import db from "../config/database.js";

const { DataTypes } = Sequelize;

const ArticleModel = db.define(
  "articles",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    theme: {
      type: DataTypes.STRING,
    },
    rubric: {
      type: DataTypes.INTEGER,
    },
    text: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
export default ArticleModel;
