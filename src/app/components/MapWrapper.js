import React from 'react';
import PropTypes from 'prop-types';

import Map from './Map';

export default class MapWrapper extends React.Component {

  render() {

    const INITIAL_CENTER = { lat: 19.346793594838058, lng: -81.37050853701783 };
      const markers = this.props.properties.map((property) => (
         {...markers, position: {lat: property.latitude, lng: property.longitude}}
      ));

    return (
      <div className="map-container">
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7bBamw6iVbNStc_ZW1KNQMsmnbF7gQoE&?v=3.exp"
          loadingElement={
          <div style={{ height: '100%'}}>
            <div>Loading...</div>
          </div>
          }
          zoom={16}
          center={INITIAL_CENTER}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          markers={markers}
        />
      </div>
    );
  }



}

MapWrapper.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string.isRequired,
      bathrooms: PropTypes.number.isRequired,
      bedrooms: PropTypes.number.isRequired,
      car_spaces: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
      code: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
