const { GraphQLSchema, GraphQLObjectType, GraphQLList } = require('graphql');
const { clustersResolver } = require('./resolvers/cluster');
const Cluster = require('./types/Cluster');

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      clusters: {
        type: new GraphQLList(Cluster),
        resolve: clustersResolver,
      }
    }
  })
});
