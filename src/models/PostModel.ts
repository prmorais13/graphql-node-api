import { Sequelize, Model, DataTypes, CreateOptions } from "sequelize";
import { BaseModelInterface } from "../interfaces/BaseModelInterface";
import { ModelsInterface } from "../interfaces/ModelsInterface";

export interface PostAttributes {
  id?: number;
  title?: string;
  content?: string;
  photo?: string;
  author?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface PostInstance extends PostAttributes {}

export interface PostModel
  extends BaseModelInterface,
    Model<PostInstance, PostAttributes> {}

export default (sequelize: Sequelize): PostModel => {
  const Post: any = sequelize.define(
    "Post",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
      photo: {
        type: DataTypes.BLOB({ length: "long" }),
        allowNull: false
      }
    },
    {
      tableName: "posts"
    }
  );

  Post.associate = (models: ModelsInterface): void => {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        field: "author",
        name: "author"
      }
    });
  };

  return Post;
};
