import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as filterActions from '../actions/filterActions';
import getFilteredPropertes from '../reducers/filteredPropertiesReducer';
import MapWrapper from '../components/MapWrapper';

const mapStateToProps = (state) => {
  return {
    properties: getFilteredPropertes(state.properties, state.activeFilters)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(filterActions, dispatch)
}

const MapContainer = connect(mapStateToProps, mapDispatchToProps)(MapWrapper);

export default MapContainer;
