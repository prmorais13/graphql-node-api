import { DbConnection } from "./interfaces/DbConnectionInterface";
import express, { Application } from "express";
import graphqlHTTP from "express-graphql";

import schema from "./graphql/schema";
import db from "./models";

class App {
  public express: Application;

  constructor() {
    this.express = express();
    this.middleware();
    // connection;
  }

  private middleware() {
    this.express.use(
      "/graphql",

      (req: any, res, next) => {
        req["context"] = {};
        req["context"].db = db;
        next();
      },

      graphqlHTTP((req: any) => ({
        schema,
        graphiql: true,
        context: req["context"]
      }))
    );
  }
}

export default new App().express;
