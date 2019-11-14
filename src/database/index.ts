import { Sequelize } from "sequelize";
import { db } from "../config/database";
import User from "../models/User";
import Addresses from "../models/Addresses";

const connection = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  define: db.define,
  dialect: "mysql"
});

User.init(connection);
Addresses.init(connection);

export default connection;
