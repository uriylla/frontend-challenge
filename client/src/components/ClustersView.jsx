import React, { useContext } from 'react';
import { ClustersContext } from '../ClustersProvider';

export default () => {
  const clusters = useContext(ClustersContext);

  return (
    <h2>Clusters view</h2>
  )
}