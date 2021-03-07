const { stories } = require('../../data/stories.json');
const { clusters } = require('../../data/clusters.json');

const findStoryById = id => stories.find(story => story.id === id);

const findClusterById = id => clusters.find(cluster => cluster.id === id)

const representativeStoryResolver = ({ id }) => {
  const story = findStoryById(findClusterById(id).representative_story.id);
  return {
    id: story.id,
    title: story.title,
    body: story.body,
    published_at: story.published_at,
    link: story.link,
    hashtags: story.hashtags
  };
}

const mediaResolver = ({ id }) => {
  return findStoryById(id).media.map(({ type, url }) => ({ type, url }))
}

const sourceResolver = ({ id }) => {
  const source = findStoryById(id).source;
  return {
    id: source.id,
    name: source.name,
    home_page_url: source.home_page_url
  }
}

const authorResolver = ({ id }) => {
  return findStoryById(id).author;
}

const linkResolver = ({ id }) => {
  return findStoryById(id).links.permalink;
}

const sentencesResolver = ({ id }) => {
  return findStoryById(id).summary.sentences;
}

module.exports = {
  representativeStoryResolver,
  mediaResolver,
  authorResolver,
  linkResolver,
  sourceResolver,
  sentencesResolver
};
