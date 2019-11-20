const postTypes = `
#Definição de tipo do Post
type Post {
	id: ID!
	title: String!
	content: String!
	photo: String!
	author: User!
	comments: [Comment!]!
	createdAt: String!
	updatedAt: String!
	
}

input PostInput {
	title: String!
	content: String!
	photo: String!
	author: Int!
}

`;
const postQueries = `
	posts(first: Int, offset: Int): [Post!]!
	post(id: ID!): Post

`;
const postMutations = `
	createPost(input: PostInput!): Post
	updatePost(id: ID!, input: PostInput!): Post
	deletetePost(id: ID!): Boolean

`;

export { postTypes, postQueries, postMutations };
