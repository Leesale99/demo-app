// import React from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as markerActions from '../actions/markerActions';
import Main from '../components/Main';


const mapStateToProps = (state) => {
  return {
    markers: state.markers,
    properties: state.properties
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(markerActions, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
