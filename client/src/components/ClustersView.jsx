import React, { useState, useContext } from 'react';
import { ClustersContext } from '../ClustersProvider';
import Clusters from './Clusters';
import Story from './Story';

export default () => {
  const clusters = useContext(ClustersContext);
  const [selectedCluster, setSelectedCluster] = useState(0);
  console.log({clusters})
  return (
    <div>
      {clusters ?
      <div style={{display: 'flex'}}>
        <Clusters clusters={clusters} selectedCluster={selectedCluster} clusterClickHandler={setSelectedCluster} />
        <Story story={clusters[selectedCluster].representative_story}/>
      </div> :
      <p>Fetching data...</p>}
    </div>
    
  )
}
