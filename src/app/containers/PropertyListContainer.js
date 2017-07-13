// import React from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as filterActions from '../actions/filterActions';
import getFilteredPropertes from '../reducers/filteredPropertiesReducer';
import PropertyList from '../components/PropertyList';


const mapStateToProps = (state) => {
  return {
    properties: getFilteredPropertes(state.properties, state.activeFilters)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(filterActions, dispatch)
}

const PropertyListContainer = connect(mapStateToProps, mapDispatchToProps)(PropertyList);

export default PropertyListContainer;
