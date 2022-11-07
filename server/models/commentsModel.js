import { Sequelize } from "sequelize";

import db from "../config/database.js";

const { DataTypes } = Sequelize;

const commentsModel = db.define(
  "comments",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    articleId: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
export default commentsModel;
