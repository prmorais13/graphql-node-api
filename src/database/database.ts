import { Sequelize } from "sequelize";
import User from "../models/User";

const conexao = new Sequelize();
User.init(conexao);

export default conexao;
