const { clusters } = require('../../data/clusters.json');

const clustersResolver = () => {
  return clusters.map(cluster => ({
    id: cluster.id,
    time: cluster.time,
    story_count: cluster.story_count,
    earliest_story: cluster.earliest_story,
    latest_story: cluster.latest_story
  }));
};

const findClusterById = id => clusters.find(cluster => cluster.id === id)

const locationResolver = source => {
  return findClusterById(source.id).location;
}

module.exports = {
  clustersResolver,
  locationResolver,
};
