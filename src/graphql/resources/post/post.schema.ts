const postTypes = `
#Definição de tipo do Post
type Post {
	id: ID!
	title: String!
	content: String!
	photo: String!
	author: User!
	comments: [Comments!]!
	createdAt: String!
	updatedAt: String!
	
}

input PostCreateInput {
	title: String!
	content: String!
	photo: String!
	author: Int!
}

`;
const postQueries = `
	posts(first: int, offset: Int): [Post!]!
	post(id: ID!): Post

`;
const postMutations = `
	createPost(input: PostCreateInput!): Post
	updatePost(id: ID!, input: PostUpdateInput!): Post
	deletetePost(id: ID!): Boolean

`;

export { postTypes, postQueries, postMutations };
