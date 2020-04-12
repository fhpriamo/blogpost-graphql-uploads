const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
});
