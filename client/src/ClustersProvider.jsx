import React, { useEffect, useState } from 'react';
import api from './api';

export const ClustersContext = React.createContext();

export default ({ children }) => {

  const [clusters, setClusters ] = useState(undefined);

  useEffect(() => {
    api.fetchClusters().then(({ data }) => setClusters(data.clusters));
  }, []);

  return  (
    <ClustersContext.Provider value={clusters}>
      {clusters && children}
    </ClustersContext.Provider>
  )
}