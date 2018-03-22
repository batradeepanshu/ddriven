import React from 'react';
import '../stylesheet/flightdetail.css'

const renderFlightData=(flightDetail)=>{
  debugger;
  return flightDetail.map((flight)=>{
    return (<div className='flight-container'>
      <div className='flight-price'>Rs {flight.Price}</div>
      {renderKeys(flight)}
    </div>)
  });
}
const renderKeys=(flight)=>{
  return Object.keys(flight).map((key)=>{
  return(<div>
  <span className='flight-key'>{key} : </span>
    <span>{flight[key]} </span>
  </div>)
  });
}

const FlightDetail=({flightDetail})=>{
  return (
    <div className='flight-detail-wrap'>
{/* {renderFlightData} */}
      {renderFlightData(flightDetail)}
    </div>
  )
}

export default FlightDetail;
