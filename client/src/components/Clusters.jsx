import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getName } from 'country-list';
import { ClusterPropType } from './types';

const Clusters = ({ clusters, selectedCluster, clusterClickHandler }) => {
  return (
    <div className="clusters">
      <h2 className="clusters__header">Clusters</h2>
      <ul className="clusters__list">
      {clusters && clusters.map((cluster, index) => (
        <li className={`cluster${selectedCluster === index ? ' cluster--selected' : ''}`} key={cluster.id} onClick={() => clusterClickHandler(index)}>
          <header className="cluster__header">
            <h4>Cluster {index + 1}</h4>
            <p>{moment(cluster.time).format('MMM Do YY')}</p>
          </header>
          <div className="cluster__content">
            <div className="cluster__details">
              <div>Total stories: <span>{cluster.story_count}</span></div>
              <div>Earliest story: <span>{moment(cluster.earliest_story).format('MMM Do YY')}</span></div>
              <div>Latest story: <span>{moment(cluster.latest_story).format('MMM Do YY')}</span></div>
              <div>Location: <span>{getName(cluster.location.country)}</span></div>
            </div>
            <img className="cluster__thumbnail" src={cluster.representative_story.media[0] ? cluster.representative_story.media[0].url : '/media-placeholder.png'} alt="media-img"></img>
          </div>
        </li>
      ))}
      </ul>
    </div>
  );
};

Clusters.defaultProps = {
  clusters: []
};

Clusters.propTypes = {
  clusters: PropTypes.arrayOf(ClusterPropType),
  selectedCluster: PropTypes.number.isRequired,
  clusterClickHandler: PropTypes.func.isRequired,
};

export default Clusters;
