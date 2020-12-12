import React, { Component } from 'react';


class Clock extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          time: new Date().getUTCDate()
        };
      }
      componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({
          time: new Date().toLocaleString()
        });
      }
      render() {
        return (
          <div className="Clock">
            <h4>
              Current time: {this.state.time}
            </h4>
          </div>

        );
      }
    }

    export default Clock;
