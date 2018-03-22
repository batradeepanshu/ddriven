import React, { Component } from 'react';
import logo from './logo.svg';
import FlightSearch from './components/FlightSearch';
import FlightDetail from './components/FlightDetail';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      flightDetail:[]
    }
  }
  filterFlightDetail(origin,destination,JSON,departureDate,returnDate){

    let filtered=JSON.filter((flightDetail)=>{
      return ((flightDetail.origin==origin) &&
      (flightDetail.destination==destination)
      && (flightDetail.Date==departureDate)) ||
      ((flightDetail.origin==destination) &&
       (flightDetail.destination==origin) &&
        (flightDetail.Date==returnDate))

      ;
    });
    debugger;
    this.setState({
      flightDetail:filtered
    })
  }
  render() {
    return (
      <div className="App">
        {/* <Header></Header> */}
        <div className='col-md-4 left-section'>
        <FlightSearch filterFlightDetail={this.filterFlightDetail.bind(this)}/>
        </div>
        <div className='col-md-8 right-section'>
        <FlightDetail flightDetail={this.state.flightDetail}/>
        </div>

      </div>
    );
  }
}

export default App;
