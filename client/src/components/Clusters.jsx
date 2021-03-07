import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getName } from 'country-list';
import { ClusterPropType } from './types';

const Clusters = ({ clusters, selectedCluster, clusterClickHandler }) => {
  return (
    <div>
      <h4>Clusters</h4>
      <ul>
      {clusters && clusters.map((cluster, index) => (
        <li className={`${selectedCluster === index ? 'selected' : ''}`} key={cluster.id} onClick={() => clusterClickHandler(index)}>
          <h5>Cluster {index + 1}</h5>
          <p>{moment(cluster.time).format('MM/DD/YYYY')}</p>
          <div>Total stories: <span>{cluster.story_count}</span></div>
          <div>Earliest story: <span>{moment(cluster.earliest_story).format('MM/DD/YYYY')}</span></div>
          <div>Latest story: <span>{moment(cluster.latest_story).format('MM/DD/YYYY')}</span></div>
          <div>Location: <span>{getName(cluster.location.country)}</span></div>
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
