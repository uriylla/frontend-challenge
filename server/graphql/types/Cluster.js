const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = require('graphql');
const { locationResolver } = require('../resolvers/cluster');
const { representativeStoryResolver } = require('../resolvers/story');
const Story = require('./Story');

const Location = new GraphQLObjectType({
  name: 'Location',
  fields: {
    country: {
      type: GraphQLString
    }
  }
});

const Cluster = new GraphQLObjectType({
  name: 'Cluster',
  fields: {
    id: {
      type: GraphQLID,
    },
    time: {
      type: GraphQLString,
    },
    story_count: {
      type: GraphQLInt,
    },
    earliest_story: {
      type: GraphQLString,
    },
    latest_story: {
      type: GraphQLString,
    },
    location: {
      type: Location,
      resolve: locationResolver
    },
    representative_story: {
      type: Story,
      resolve: representativeStoryResolver
    },
  }
});

module.exports = Cluster;