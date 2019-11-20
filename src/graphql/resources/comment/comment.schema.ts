const commentTypes = `
#Definição de tipo do Comment
type Comment {
	id: ID!
	commnent: String!
	user: User!
	post: Post!
	createdAt: String!
	updatedAt: String!
	
}

input CommentInput {
	comment: String!
	user: Int!
	post: Int!
}

`;
const commentQueries = `
	commentsByPost(post: ID!, first: Int, offset: Int): [Comment!]!

`;
const commentMutations = `
	createComment(input: CommentInput!): Comment
	updateComment(id: ID!, input: CommentInput!): Comment
	deleteteComment(id: ID!): Boolean

`;

export { commentTypes, commentQueries, commentMutations };
