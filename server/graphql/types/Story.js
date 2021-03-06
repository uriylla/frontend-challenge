const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = require('graphql');
const { sourceResolver, authorResolver, mediaResolver, linkResolver, sentencesResolver } = require('../resolvers/story');

const Source = new GraphQLObjectType({
  name: 'Source',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    home_page_url: {
      type: GraphQLString,
    }
  }
});

const Author = new GraphQLObjectType({
  name: 'Author',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    }
  }
});

const Media = new GraphQLObjectType({
  name: 'Media',
  fields: {
    type: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    }
  }
});

const Story = new GraphQLObjectType({
  name: 'Story',
  fields: {
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    body: {
      type: GraphQLString,
    },
    published_at: {
      type: GraphQLString,
    },
    link: {
      type: GraphQLString,
      resolve: linkResolver
    },
    hashtags: {
      type: new GraphQLList(GraphQLString)
    },
    media: {
      type: new GraphQLList(Media),
      resolve: mediaResolver
    },    
    source: {
      type: Source,
      resolve: sourceResolver
    },
    author: {
      type: Author,
      resolve: authorResolver
    },
    sentences: {
      type: new GraphQLList(GraphQLString),
      resolve: sentencesResolver
    }
  }
});

module.exports = Story;