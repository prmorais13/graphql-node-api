import { Sequelize, Model, DataTypes } from "sequelize";
import { BaseModelInterface } from "../interfaces/BaseModelInterface";
import { ModelsInterface } from "../interfaces/ModelsInterface";

export interface CommentAttributes {
  id?: number;
  comment?: string;
  post?: number;
  user?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CommentInstance extends CommentAttributes {}

export interface CommentModel
  extends BaseModelInterface,
    Model<CommentInstance, CommentAttributes> {}

export default (sequelize: Sequelize): CommentModel => {
  const Comment: any = sequelize.define(
    "Comment",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      comment: { type: DataTypes.TEXT, allowNull: false }
    },
    {
      tableName: "comments"
    }
  );

  Comment.associate = (models: ModelsInterface): void => {
    Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        field: "user",
        name: "user"
      }
    });

    Comment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false,
        field: "post",
        name: "post"
      }
    });
  };

  return Comment;
};
