import React from 'react';
import './App.css';
import Geocode from "react-geocode";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Moment from 'react-moment';
import 'moment-timezone'
import moment from 'moment';
import './City.css'

import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from '../app_component/weather.component';
import Form from '../app_component/form.component'
import Forecast from '../app_component/forecast.component';
import TwoDays from './TwoDays.weather.component';

const API_KEY = "4227fada9bed98e3e74d06c609146310";
const GEOAPI_KEY = "AIzaSyDXn4LTUz-uH-4nxMU9xvKDgL0KW43cd5I"
Geocode.setApiKey("AIzaSyDXn4LTUz-uH-4nxMU9xvKDgL0KW43cd5I");
Geocode.setRegion("ru");

function useAsyncReference(value, isProp = false) {
  const ref = useRef(value);
  const [, forceRender] = useState(false);

  function updateState(newState) {
    if (!Object.is(ref.current, newState)) {
      ref.current = newState;
      forceRender(s => !s);
    }
  }

  if (isProp) {
    ref.current = value;
    return ref;
  }

  return [ref, updateState];
}

function City(){
  const[latitude, setLatitude] = useState(0);
  const[longitude, setLongitude] = useState(0);
  const[data, setData] = useState({});
 
  // const[temp, setTemp] = useState();


  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }


const locationEntered = (e, city) => {
  // console.log("DATAEVENT",e)
  // const city = e.target.elements.city.value;

  Geocode.fromAddress(city).then(
    (response) => {
     const lat = response.results[0].geometry.location.lat;
     const lng = response.results[0].geometry.location.lng;
     setLatitude(lat);
     setLongitude(lng);

     console.log(lat, lng);
     console.log("DATA GEOCODE", data)
    },
    (error) => {
      console.error(error);
    }
    
  );
  
  //console.log("DATA2",this.state)
}

useEffect(() => {
  const GeoWeather = async() => {
    try{
        await window.navigator.geolocation.getCurrentPosition(savePositionToState);
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,current,daily,alerts&appid=${API_KEY}&units=metric`);
        setData(response.data)
        console.log("GEOLOCATION", response.data)
        console.log('geolocation asked')
    } catch(err) {
      console.log(err)
    }
  }
  GeoWeather();
}, [])

  const fetchWeather = async(e) => {
    console.log(e)
    e.preventDefault();
    const city = e.target.elements.city.value;
    try{
      if(city){
        locationEntered(e, city)
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,current,daily,alerts&appid=${API_KEY}&units=metric`
        );
        setData(response.data)
        console.log("LOCATIONENTERED", data)
        console.log('pushed')
      } else {
        console.log('No data')
      }

    } catch(err) {
      console.log(err)
    }

    
  }

const showWeather =(e) => {
  // fetchWeather(e);
  let data1 = data.hourly;
  console.log("DATA1", data1)
  let listItems;
  if(data1 !== undefined) {
    const listItems = data.hourly.map(({dt, temp,  weather: [{description, icon, main, id}] }) => (
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
}
  



return (
  <div className="City">
    <Form loadweather={fetchWeather} />
    <>
        <div className="weather">
          {/* <TwoDays data = {data} /> */}
        {showWeather()}
        </div>
    </>
  </div>
)

}

export default City;