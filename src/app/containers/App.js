import React from 'react';
// import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as markerActions from '../actions/markerActions';

import Main from '../components/Main';
import MapContainer from './MapContainer';


export default class App extends React.Component {


  render() {


    return (
      <div className="wrapper">
        <Main />
        <MapContainer />
      </div>
    )

  }
}

// App.propTypes = {
//   markers: PropTypes.array.isRequired
// }
//
// const mapStateToProps = (state) => {
//   return {
//     markers: state.markers
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(markerActions, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
