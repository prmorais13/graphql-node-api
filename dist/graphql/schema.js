"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const users = [
    {
        id: 1,
        name: "Paulo Roberto",
        email: "prmorais1302@gmail.com"
    },
    {
        id: 2,
        name: "Maria Fernanda",
        email: "nanda04@gmail.com"
    }
];
const typeDefs = `
	type User {
		id: ID!
		name: String!
		email: String!
	}
	type Query {
		allUsers: [User!]!
	}
`;
const resolvers = {
    Query: {
        allUsers: () => users
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });
