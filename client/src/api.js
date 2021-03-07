const headers = new Headers();
headers.append('Content-Type', 'application/json');

var graphql = JSON.stringify({
  query: `
    {
      clusters {
        id
        time
        story_count
        earliest_story
        latest_story
        location {
          country
        }
        representative_story {
          id
          title
          body
          sentences
          link
          hashtags
          media {
            type
            url
          }
          source {
            id
            name
            home_page_url
          }
          author {
            id
            name
          }
          sentences
        }
      }
    }
  `,
  variables: {},
});

const requestOptions = {
  method: 'POST',
  headers: headers,
  body: graphql,
};

const fetchClusters = () =>
  fetch('http://localhost:3030/graphql', requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log('error', error));

export default {
  fetchClusters,
};
