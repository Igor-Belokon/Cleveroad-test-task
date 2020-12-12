import React, { Component } from 'react';


class Person extends Component {
  render() {

    return (
      <div className="Person">
        <img src="https://intellihr.com.au/wp-content/themes/2018-05-11_14-32_intellihr-wordpress/assets/images/default-userAvatar.png" height="50px" width="50px" alt=""/>
        <h5>{this.props.name}</h5>
      </div>
    );
  }
}

export default Person;
