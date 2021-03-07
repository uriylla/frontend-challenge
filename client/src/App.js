import React from 'react';
import ClustersProvider from './ClustersProvider';
import ClustersView from './components/ClustersView';
import './App.css';

function App() {
  return (
    <div className="App">
        <ClustersProvider>
          <ClustersView />
        </ClustersProvider>
    </div>
  );
}

export default App;
