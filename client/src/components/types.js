import PropTypes from 'prop-types';

export const StoryPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  sentences: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
  media: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    home_page_url: PropTypes.string.isRequired,
  }).isRequired,
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
});

export const ClusterPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  story_count: PropTypes.number.isRequired,
  earliest_story: PropTypes.string.isRequired,
  latest_story: PropTypes.string.isRequired,
  location: PropTypes.shape({
    country: PropTypes.string.isRequired,
  }).isRequired,
  representative_story: StoryPropType.isRequired,
});
