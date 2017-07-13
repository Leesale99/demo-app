import React from 'react';

import Header from '../components/Header';
import PropertyListContainer from '../containers/PropertyListContainer';
import MapContainer from '../containers/MapContainer';

const App = () => {

    return (
      <div className="wrapper">
        <div className="listings">
          <Header />
          <PropertyListContainer />
        </div>
        <MapContainer />
      </div>
    );
  };

export default App;
