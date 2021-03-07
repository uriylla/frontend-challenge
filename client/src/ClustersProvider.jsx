import React, { useEffect, useState } from 'react';
import api from './api';

export const ClustersContext = React.createContext();

export default ({ children }) => {

  const [clusters, setClusters ] = useState([]);

  useEffect(() => {
    api.fetchClusters().then(({ data }) => setClusters(data));
  }, []);

  return  (
    <ClustersContext.Provider value={clusters}>
      {children}
    </ClustersContext.Provider>
  )
}