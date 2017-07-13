const { makeExecutableSchema } = require('graphql-tools');

const schema = `
type Author {
  id: Int! # the ! means that every author object _must_ have an id
  firstName: String
  lastName: String
  articles: [Article]
}
type Article {
  id: Int!
  title: String
  description: String
  body: String
  author: Author
  tags: [Tag]
}
type Tag {
  id: Int!
  title: String
}
type Query {
  articles: [Article]
  tags: [Tag]
}
type Mutation {
  tagArticle (
    articleId: Int!
  ): Article
}
schema {
  query: Query
  mutation: Mutation
}
`;

const resolvers = require('./resolvers.js');
module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolvers,
});
