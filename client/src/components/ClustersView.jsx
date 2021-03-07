import React, { useContext } from 'react';
import { ClustersContext } from '../ClustersProvider';

export default () => {
  const clusters = useContext(ClustersContext);

  return (
    <p>{JSON.stringify(clusters, undefined, 2)}</p>
  )
}
