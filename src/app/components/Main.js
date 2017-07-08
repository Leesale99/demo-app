import React from 'react';
import PropTypes from 'prop-types';

import Map from './Map';
import PropertyCard from './PropertyCard';


const Main = (props) => {

  const INITIAL_CENTER = { lat: 45.271446, lng: 19.8144217 };

  return (
    <div className="wrapper">
      <div className="listings">
        <header>
          <form className="form-inline">
            <label htmlFor="exampleInputEmail1">Search</label>
            <input type="search" className="form-control" id="exampleInputEmail1" placeholder="Search" />
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </header>
        <div className="card-container container">
          <div className="card-grid row">
            {props.properties.map((property, index) => {
              return  <PropertyCard key={index} property={props.properties[index]} />
            })}
          </div>
        </div>
      </div>
      <div className="map-container">
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7bBamw6iVbNStc_ZW1KNQMsmnbF7gQoE&?v=3.exp"
          loadingElement={
          <div style={{ height: '100%'}}>
            <div>Loading...</div>
          </div>
          }
          zoom={12}
          center={INITIAL_CENTER}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          markers={props.markers}
        />
      </div>
    </div>
  );
}

Main.propTypes = {
  markers: PropTypes.array.isRequired,
  properties: PropTypes.array.isRequired
}

export default Main;
