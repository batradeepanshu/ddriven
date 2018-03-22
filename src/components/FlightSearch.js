import React,{Component} from 'react';
import json from '../constants/JSON';
import '../stylesheet/FlightSearch.css'

class FlightSearch extends Component{
  constructor(){
    super();
    this.state={
      origin:'',
      destination:'',
      departureDate:'',
      returnDate:'',
      oneWay:true
    }
    this.flightData=json;
  }
  setOrigin(e){

    this.setState({
      origin:e.target.value
    });
  }
  setDestination(e){
    this.setState({
      destination:e.target.value
    });
  }
  setDate(flag,e){
    debugger;
    if(flag){
      this.setState({
        departureDate:e.target.value
      });
    }
    else{
      this.setState({
        returnDate:e.target.value
      });
    }
  }
  switchTripMode(oneWayValue){
    this.setState({
      oneWay:oneWayValue
    })
  }
  onSearch(){
    this.props.filterFlightDetail(
      this.state.origin,
      this.state.destination,
      this.flightData,
      this.state.departureDate,
      this.state.returnDate
    );
  }
  render(){
    return (
      <React.Fragment>
        <div className='trip-tabs'>
          <div className='col-md-6' onClick={this.switchTripMode.bind(this,true)}>ONE WAY</div>
          <div className='col-md-6' onClick={this.switchTripMode.bind(this,false)}>ROUND TRIP</div>
        </div>
      <div className='flight-search-wrap'>
        <input placeholder='Enter Origin City' onChange={this.setOrigin.bind(this)}
          value={this.state.origin}/>
          {this.state.origin}
        <input placeholder='Enter Destination City' onChange={this.setDestination.bind(this)}/>
        {this.state.destination}
        <input placeholder='Departure Date' onChange={this.setDate.bind(this,true)}/>
        {this.state.departureDate}
        {!this.state.oneWay && <input placeholder='Return Date' onChange={this.setDate.bind(this,false)}/>}
        {this.state.returnDate}
        <div  className='srch-btn' onClick={this.onSearch.bind(this)}>SEARCH</div>
      </div>
      </React.Fragment>
    );
  }

}

export default FlightSearch;
