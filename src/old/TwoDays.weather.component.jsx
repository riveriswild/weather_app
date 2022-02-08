import React from "react";
import Moment from 'react-moment';
import 'moment-timezone'
import moment from 'moment';

function TwoDays(props) {
    let data1 = props.data.hourly;
  console.log("DATA1", data1)
  let listItems;
  if(data1 !== undefined) {
    const listItems = props.data.hourly.map(({dt, temp,  weather: [{description, icon, main, id}] }) => (
      <div className='container' key={dt}>
      {/* <li>{moment(dt * 1000).format("dddd")}</li> */}
      <div>{moment(dt * 1000).format("h:mm a")}</div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="weather icon"
        />
      </div>
      <div>{Math.round(temp)}°C</div>
      <li>{description}</li>
    </div>)) 
    return listItems
  }
  return (
  {listItems}
  )
}


export default TwoDays;

