import { makeExecutableSchema } from "graphql-tools";
import User from "../models/User";

let users: any[] = [
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
	},
	type Mutation {
		createUser(name: String!, email: String!): User
	}
`;

const resolvers = {
  Query: {
    allUsers: async () => {
      users = await User.findAll();
      return users;
    }
  },
  Mutation: {
    createUser: async (parente: any, args: any) => {
      console.log(args);
      const { name, email } = args;
      const newUser = await User.create({ name, email });
      // const newUser = Object.assign({ id: users.length + 1 }, args);
      // users.push(newUser);
      return newUser;
    }
  }
};

export default makeExecutableSchema({ typeDefs, resolvers });
