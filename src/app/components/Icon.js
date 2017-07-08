import React from 'react';
import PropTypes from 'prop-types';


const Icon = ({ glyph, fillColor, strokeColor }) => {

  return  (
    <span className={`icon icon-${glyph.id}`}>
      <svg stroke={strokeColor} fill={fillColor}><use xlinkHref={`#${glyph.id}`} /></svg>
    </span>
  )
}

Icon.propTypes = {
  glyph: PropTypes.object.isRequired,
  fillColor: PropTypes.string,
  strokeColor: PropTypes.string
}

export default Icon;
