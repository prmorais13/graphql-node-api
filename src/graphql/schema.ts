import { makeExecutableSchema } from "graphql-tools";

const users: any[] = [
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

export default makeExecutableSchema({ typeDefs, resolvers });
