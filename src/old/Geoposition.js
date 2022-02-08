import axios from "axios";
import { useEffect, useState } from "react";
import Weather from "../app_component/weather.component";
import City from "./City";
import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = "4227fada9bed98e3e74d06c609146310";


function Geoposition() {
  const[latitude, setLatitude] = useState(0);
  const[longitude, setLongitude] = useState(0);
  const[description, setDescription] = useState('');
  const [celsius, setCelsius] = useState(0);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [icon, setIcon] = useState('');
  const [temp_max, setTemp_max] = useState('');
  const [temp_min, setTemp_min] = useState('');

  const weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
  };

  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  const calcTemp = (temp) => {
    let cels = Math.floor(temp);
    return cels;
  }

  const get_WeatherIcon = (icons, rangeId) => {
    if (rangeId>=200 && rangeId <=232) {
      setIcon(weatherIcon.Thunderstorm);
    }
    if (rangeId>=300 && rangeId <=321){
    setIcon(weatherIcon.Drizzle);
    }
    if (rangeId>=500 && rangeId <=531) {
    setIcon(weatherIcon.Rain);
    }
    if(rangeId>=600 && rangeId <=622) {
      setIcon(weatherIcon.Snow);
    }
    if (rangeId>=701 && rangeId <=781) {
    setIcon(weatherIcon.Atmosphere);
    }
    if(rangeId === 800) {
      setIcon(weatherIcon.Clear);
    }
    if (rangeId>=800 && rangeId <=804){
      setIcon(weatherIcon.Clouds);
    }
  }

  useEffect(() => {
    const fetchWeather = async() => {
      try {
        await window.navigator.geolocation.getCurrentPosition(savePositionToState);
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        setCelsius(calcTemp(res.data.main.temp));
        setCity(res.data.name);
        setDescription(res.data.weather[0].main);
        setCountry(res.data.sys.country);
        setTemp_max(calcTemp(res.data.main.temp_max));
        setTemp_min(calcTemp(res.data.main.temp_min));
        get_WeatherIcon(weatherIcon, res.data.weather[0].id);
        // console.log(weatherIcon.Clouds)
        // console.log(res.data.weather[0].id)
        // console.log(get_WeatherIcon(weatherIcon, res.data.weather[0].id))
  
      } catch (err) {
        console.error(err);
      }
    }
    fetchWeather();
    console.log("Check")

  }, [latitude, longitude])

  // useEffect(() => {
  //   fetchWeather();
  // });
  return (
    <div className="Geoposition">
    <div className="geoposition__container">
      <Weather
      city={city}
      country={country}
      temp_celsius={celsius}
      temp_max={temp_max}
      temp_min={temp_min}
      description={description}
      weatherIcon={icon}/>

    </div>
    </div>
  );

}

export default Geoposition;