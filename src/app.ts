import express, { Application } from "express";
import graphqlHTTP from "express-graphql";

import schema from "./graphql/schema";

class App {
	public express: Application;

	constructor() {
		this.express = express();
		this.middleware();
	}

	private middleware() {
		this.express.use(
			"/graphql",
			graphqlHTTP({
				schema,
				graphiql: true
			})
		);
	}
}

export default new App().express;
