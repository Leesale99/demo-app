import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const PropertyList = (props) => {

  

  return (
    <div className="card-container container">
      <div className="card-grid row">
        {props.properties.map((property) => (
          <Card key={property.id} {...property}/>
        ))}
      </div>
    </div>
  );
}

PropertyList.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.shape({
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
  }).isRequired).isRequired
}

export default PropertyList;
