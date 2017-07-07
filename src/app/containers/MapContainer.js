import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as markerActions from '../actions/markerActions';

import Map from '../components/Map';


class MapContainer extends React.Component {

  onDeleteClick = () => {}

  render() {

    const location = {
      lat: 45.2590011,
      lng: 19.8092865
    }

    return (

        <div className="map-container">
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7bBamw6iVbNStc_ZW1KNQMsmnbF7gQoE&?v=3.exp"
            loadingElement={
            <div style={{ height: '100%'}}>
              <div>Loading...</div>
            </div>
            }
            zoom={12}
            center={location}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
            markers={this.props.markers}
          />
        </div>
    )

  }
}

MapContainer.propTypes = {
  markers: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    markers: state.markers
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(markerActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
