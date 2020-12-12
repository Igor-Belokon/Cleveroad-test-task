import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const mapStyle = {
  width: '52%',
  height: '80%',
  position: 'relative',
  marginLeft: '110px',
  'marginTop': '18px'

}
export class MapContainer extends Component {

  render() {
    let positionLat;
    let positionLong;

    if (this.props.coords) {
      positionLat = this.props.coords.iss_position.latitude;
      positionLong = this.props.coords.iss_position.longitude;

    }
    return (
      <div className="Map">
        <Map
          google={this.props.google}
          zoom={4}
          style={mapStyle}
          center={{
            lat: positionLat,
            lng: positionLong
          }}
        >

          <Marker position={
              { lat: positionLat,
                lng: positionLong}
              } />


        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDPw4OWrjl4hk8sBK3AsGUfRMHPJyblOm0') 
})(MapContainer)
