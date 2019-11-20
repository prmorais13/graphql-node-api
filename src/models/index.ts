import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";

import { DbConnection } from "../interfaces/DbConnectionInterface";

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
let config = require(path.resolve(`${__dirname}./../config/config.json`))[env];

let db: any = null;

if (!db) {
  db = {};
  const sequelize: Sequelize = new Sequelize(config);

  fs.readdirSync(__dirname)
    .filter(file => {
      return (
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
      );
    })
    .forEach(file => {
      const model = sequelize.import(path.join(__dirname, file));
      db[model["name"]] = model;
    });

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db["sequelize"] = sequelize;
}

export default <DbConnection>db;
