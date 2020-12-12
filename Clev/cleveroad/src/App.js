import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Location from './components/Location';
import Clock from './components/Clock';
import Map from './components/MapContainer';
import Person from './components/Person';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ISSInfo: {},
      astros: {}
    }
  }

  componentDidMount(){
    this.interval = setInterval(() => axios.all([
      axios.get('http://api.open-notify.org/iss-now.json'),
      axios.get('http://api.open-notify.org/astros.json')
    ])
    .then(axios.spread((iss, astros) => {
      this.setState({
        ISSInfo: iss,
        astros: astros
      });
    }))
    ,5000);
  }
  componentWillMount(){
    axios.all([
      axios.get('http://api.open-notify.org/iss-now.json'),
      axios.get('http://api.open-notify.org/astros.json')
    ])
    .then(axios.spread((iss, astros) => {
      this.setState({
        ISSInfo: iss,
        astros: astros
      });
    }));
  }

  componentWillUnmount() {
   clearInterval(this.interval);
  }
  render() {
    let coords = this.state.ISSInfo.data;
    let astros = [];
    if (this.state.astros.data){
        astros = this.state.astros.data.people.map(e =>{
          if (e.craft == 'ISS') {
            return (
              <Person
               key={e.name}
               name={e.name}
                />
            )
          };
        });
    }


    return (
      <div className="App">
        <div className="topHeader">
          <div className="coordsWrap">
             <Location coords={coords}/>
             <Clock/>
          </div>
        </div>
        <div className="bottomWrapper">
          <Map coords={coords}/>
          <div className="personsList">
            <ul>
               {astros}
            </ul>
            <div className="amount_of_people">
               <h4>Total amount: {astros.length} people on ISS</h4>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
