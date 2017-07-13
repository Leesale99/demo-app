import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';
import bath from '../../img/icons/bath.svg';
import bed from '../../img/icons/left-bed.svg';
import car from '../../img/icons/car.svg';


const Card = (props) => {

  return (
    <div className="card col-sm-12 col-md-6 col-lg-4">
      <div className="card__image">
        <img src={props.picture} alt="property picture"/>
      </div>
      <div className="card__body">
        <span className="index">{props.code}</span>
        <p className="price">{props.price}</p>
        <p className="location">{props.city} <br/> {props.address} </p>
        <ul className="card__features">
          <li className="card__feature bedrooms"><Icon glyph={bed} /> {props.bedrooms}</li>
          <li className="card__feature bathrooms"><Icon glyph={bath} /> {props.bathrooms}</li>
          <li className="card__feature car-places"><Icon glyph={car} /> {props.car_spaces}</li>
        </ul>
      </div>
    </div>
  )
}

Card.propTypes = {
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
  }

export default Card;
