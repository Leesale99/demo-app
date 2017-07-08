import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';
import bath from '../../img/icons/bath.svg';
import bed from '../../img/icons/left-bed.svg';
import car from '../../img/icons/car.svg';
// import envelope from '../../img/icons/envelope.svg';


const PropertyCard = (props) => {

const { property } = props;


  return (
      <div className="card col-sm-12 col-md-6 col-lg-4">
        <div className="card__image">
          <img src={property.picture} alt="property picture"/>
        </div>
        <div className="card__body">
          <span className="index">{property.code}</span>
          <p className="price">{property.price}</p>
          <p className="location">{property.city} <br/> {property.address} </p>
          <ul className="card__features">
            <li className="card__feature bedrooms"><Icon glyph={bed} /> {property.bedrooms}</li>
            <li className="card__feature bathrooms"><Icon glyph={bath} /> {property.bathrooms}</li>
            <li className="card__feature car-places"><Icon glyph={car} /> {property.car_spaces}</li>
          </ul>
        </div>
      </div>

  )
}

PropertyCard.propTypes = {
  property: PropTypes.object.isRequired
}

export default PropertyCard;
