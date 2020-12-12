import React, { Component } from 'react';


class Location extends Component {
  render() {

    if (this.props.coords) {
      let position = this.props.coords.iss_position;
      return (
        <div className="Location">
          <h4><b>ISS current position:</b> latitude: {position.latitude} longitude: {position.longitude}</h4>
        </div>
      );
    }
    return (
      <div className="Location">

      </div>
    )
  }
}

export default Location;
