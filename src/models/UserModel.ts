import {
  Sequelize,
  Model,
  DataTypes,
  CreateOptions,
  BuildOptions
} from "sequelize";
import { genSaltSync, hashSync, compareSync } from "bcryptjs";
import { BaseModelInterface } from "../interfaces/BaseModelInterface";

export interface UserAttributes {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  photo?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserInstance extends UserAttributes {
  isPassword(encondedPassword: string, password: string): boolean;
}

// export interface UserModel
//   extends BaseModelInterface,
// 		Model<UserInstance, UserAttributes> {}

export type UserModel = typeof Model & {
  new (values?: object, options?: BuildOptions): any;
};

export default (sequelize: Sequelize): UserModel => {
  const User = <UserModel>sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: { type: DataTypes.STRING(128), allowNull: false },
      email: { type: DataTypes.STRING(128), allowNull: false, unique: true },
      password: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: { notEmpty: true }
      },
      photo: {
        type: DataTypes.BLOB({ length: "long" }),
        allowNull: true,
        defaultValue: null
      }
    },
    {
      tableName: "users",
      hooks: {
        beforeCreate: (user: any, options: CreateOptions): void => {
          const salt = genSaltSync();
          user.password = hashSync(user.password, salt);
        }
      }
    }
  );

  User.prototype.isPassword = (
    encondedPassword: string,
    password: string
  ): boolean => {
    return compareSync(password, encondedPassword);
  };

  return User;
};
