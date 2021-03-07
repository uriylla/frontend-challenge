import React, { useState, useContext } from 'react';
import { ClustersContext } from '../ClustersProvider';
import Clusters from './Clusters';
import Story from './Story';

export default () => {
  const clusters = useContext(ClustersContext);
  const [selectedCluster, setSelectedCluster] = useState(0);
  return (
    <div>
      {clusters ?
      <div className="clusters-view">
        <Clusters clusters={clusters} selectedCluster={selectedCluster} clusterClickHandler={setSelectedCluster} />
        <Story story={clusters[selectedCluster].representative_story}/>
      </div> :
      <p>Fetching data...</p>}
    </div>
    
  )
}
