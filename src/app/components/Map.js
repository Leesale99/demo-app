import React from 'react';
import PropTypes from 'prop-types';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

class Map extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      map: null
    }
  }

  mapMoved = () => {
    // console.log('mapMoved: ' + JSON.stringify(this.state.map.getCenter()));
  }

  mapLoaded = (map) => {

    if (this.state.map != null) {
      return;
    }

    this.setState({
      map: map
    })
  }

  zoomChanged = () => {
    // console.log('mapZoomChanged: ' + JSON.stringify(this.state.map.getZoom()));
  }

  render() {

    const markers = this.props.markers || [];

    return (

      <GoogleMap
        ref={this.mapLoaded}
        onZoomChanged={this.zoomChanged}
        onDragEnd={this.mapMoved}
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center} >
          {markers.map((marker, index) => (
            <Marker key={index} {...marker} />
          ))}
      </GoogleMap>
    )
  }
}

Map.propTypes = {
  markers: PropTypes.array.isRequired,
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired
}

export default withScriptjs(withGoogleMap(Map));
