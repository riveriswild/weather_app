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

const get_WeatherIcon = (icons, rangeId) => {
  switch(true) {
    case rangeId>=200 && rangeId <=232:
      setIcon(weatherIcon.Thunderstorm);
      break;
    case rangeId>=300 && rangeId <=321:
      setIcon(weatherIcon.Drizzle);
      break;
    case rangeId>=500 && rangeId <=531:
      setIcon(weatherIcon.Rain);
      break;
    case rangeId>=600 && rangeId <=622:
      setIcon(weatherIcon.Snow);
      break;
    case rangeId>=701 && rangeId <=781:
      setIcon(weatherIcon.Atmosphere);
      break;
    case rangeId === 800:
      setIcon(weatherIcon.Clear);
      break;
    case rangeId>=800 && rangeId <=804:
      setIcon(weatherIcon.Clouds);
      break;
    default:
      setIcon(weatherIcon.Clouds)
  }
  return icon
}

import React from 'react';
import './App.css';

import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from '../app_component/weather.component';
import Form from '../app_component/form.component'

const API_KEY = "4227fada9bed98e3e74d06c609146310";

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,
      latitude: undefined,
      longitude: undefined
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };

    this.getWeather = this.getWeather.bind(this);
  }

  calcCelsius(temp){
    let cels = Math.floor(temp - 273.15);
    return cels;
  }

  get_WeatherIcon(icons, rangeId){
    switch(true){
      case rangeId>=200 && rangeId <=232:
        this.setState({icon:this.weatherIcon.Thunderstorm});
        break;
      case rangeId>=300 && rangeId <=321:
        this.setState({icon:this.weatherIcon.Drizzle});
        break;
      case rangeId>=500 && rangeId <=531:
        this.setState({icon:this.weatherIcon.Rain});
        break;
      case rangeId>=600 && rangeId <=622:
        this.setState({icon:this.weatherIcon.Snow});
        break;
      case rangeId>=701 && rangeId <=781:
        this.setState({icon:this.weatherIcon.Atmosphere});
        break;
      case rangeId==800:
        this.setState({icon:this.weatherIcon.Clear});
        break;
      case rangeId>=801 && rangeId <=804:
        this.setState({icon:this.weatherIcon.Clouds});
        break;
      default:
        this.setState({icon: this.weatherIcon.Clouds})
    }
  }

  getWeather = async(e)=> {
    console.log('EVENT', e)
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    console.log('IT WORKS')

    if(city&&country){
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&appid=${API_KEY}`
      );
      const response = await api_call.json();
      console.log('LOOK', response)
  
      this.setState({
        city: response.name,
        country: response.sys.country,
        celsius: this.calcCelsius(response.main.temp),
        temp_max: this.calcCelsius(response.main.temp_max),
        temp_min: this.calcCelsius(response.main.temp_min),
        description: response.weather[0].description,
      });
  
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    }else{
       console.log('NOTHING WORKS')
    }
  };
  render() {
    return(
      <div className="City">
        <Form loadweather={this.getWeather} />
        <Weather 
        city={this.state.city} 
        country={this.state.country}
        temp_celsius={this.state.celsius}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        weatherIcon={this.state.icon}/>
      </div>
    )
  }
}

export default City

import React from 'react';
import './App.css';

import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from '../app_component/weather.component';
import Form from '../app_component/form.component'

const API_KEY = "4227fada9bed98e3e74d06c609146310";

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,
      latitude: undefined,
      longitude: undefined
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };

    this.getWeather = this.getWeather.bind(this);
  }

  calcCelsius(temp){
    let cels = Math.floor(temp - 273.15);
    return cels;
  }

  get_WeatherIcon(icons, rangeId){
    switch(true){
      case rangeId>=200 && rangeId <=232:
        this.setState({icon:this.weatherIcon.Thunderstorm});
        break;
      case rangeId>=300 && rangeId <=321:
        this.setState({icon:this.weatherIcon.Drizzle});
        break;
      case rangeId>=500 && rangeId <=531:
        this.setState({icon:this.weatherIcon.Rain});
        break;
      case rangeId>=600 && rangeId <=622:
        this.setState({icon:this.weatherIcon.Snow});
        break;
      case rangeId>=701 && rangeId <=781:
        this.setState({icon:this.weatherIcon.Atmosphere});
        break;
      case rangeId==800:
        this.setState({icon:this.weatherIcon.Clear});
        break;
      case rangeId>=801 && rangeId <=804:
        this.setState({icon:this.weatherIcon.Clouds});
        break;
      default:
        this.setState({icon: this.weatherIcon.Clouds})
    }
  }

  getWeather = async(e)=> {
    console.log('EVENT', e)
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    console.log('IT WORKS')

    if(city&&country){
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&appid=${API_KEY}`
      );
      const response = await api_call.json();
      console.log('LOOK', response)
  
      this.setState({
        city: response.name,
        country: response.sys.country,
        celsius: this.calcCelsius(response.main.temp),
        temp_max: this.calcCelsius(response.main.temp_max),
        temp_min: this.calcCelsius(response.main.temp_min),
        description: response.weather[0].description,
      });
  
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    }else{
       console.log('NOTHING WORKS')
    }
  };
  render() {
    return(
      <div className="City">
        <Form loadweather={this.getWeather} />
        <Weather 
        city={this.state.city} 
        country={this.state.country}
        temp_celsius={this.state.celsius}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        weatherIcon={this.state.icon}/>
      </div>
    )
  }
}

export default City


import React from "react";

const Weather =(props) => {
    return(
        <div className="container">
            <div className="cards">
                <h1>{props.city}  {props.country}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`} />
                </h5>
                {props.temp_celsius ? (<h1 className="py-2">{props.temp_celsius}&deg;</h1>) : null}
                {/** show max and min temp */}
                {minmaxTemp(props.temp_min,props.temp_max)}
                <h4 className="py-3">{props.description}</h4> 
            </div>
        </div>
    )
}

function minmaxTemp(min, max) {
    if(min&&max){
        return(
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        )
    }
}

export default Weather;

class App extends React.Component {
  //state
  state = {
    userPosition: {
      latitude: {},
      longitude: {}
    },
    data: [],
    dailyData: []
  };

  componentDidMount() {
    //check whether geolocation is supported
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        //get the lat and long of your device
        let pos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };

        this.setState({ userPosition: pos });
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.userPosition.latitude}&lon=${this.state.userPosition.longitude}&%20exclude=minutely&appid=128944992833eb85f19eeebe5415027c`
        )
          .then((response) => response.json())
          .then((data) => {
            this.setState({ data: data, dailyData: data.daily });
          });
      });
    }
  }

  render() {
    const location = this.state.data.timezone;
    const listItems = this.state.dailyData.map(
      ({ dt, temp: { day }, weather: [{ description, icon, main, id }] }) => (
        <ul key={dt}>

          <li>
            <img
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              alt="weather icon"
            />
          </li>
          <li>{Math.round(day - 273.15)}°C</li>
          <li>{description}</li>
        </ul>
      )
    );
    const DivStyles = {
      margin: "10px",
      padding: "10px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    };
    return (
      <>
        <h1>{location}</h1>
        <h2>8 Day Weather Forecast</h2>
        <div style={DivStyles}>{listItems}</div>
      </>
    );
  }
}

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      // city: undefined,
      // country: undefined,
      // icon: undefined,
      // main: undefined,
      // celsius: undefined,
      // temp_max: undefined,
      // temp_min: undefined,
      // description: "",
      // error: false,
      latitude: undefined,
      longitude: undefined,
    };

    // this.weatherIcon = {
    //   Thunderstorm: "wi-thunderstorm",
    //   Drizzle: "wi-sleet",
    //   Rain: "wi-storm-showers",
    //   Snow: "wi-snow",
    //   Atmosphere: "wi-fog",
    //   Clear: "wi-day-sunny",
    //   Clouds: "wi-day-fog"
    // };

    this.getWeather = this.getWeather.bind(this);
    this.locationEntered = this.locationEntered.bind(this);
  }

  calcCelsius(temp){
    let cels = Math.floor(temp - 273.15);
    return cels;
  }

  // get_WeatherIcon(icons, rangeId){
  //   switch(true){
  //     case rangeId>=200 && rangeId <=232:
  //       this.setState({icon:this.weatherIcon.Thunderstorm});
  //       break;
  //     case rangeId>=300 && rangeId <=321:
  //       this.setState({icon:this.weatherIcon.Drizzle});
  //       break;
  //     case rangeId>=500 && rangeId <=531:
  //       this.setState({icon:this.weatherIcon.Rain});
  //       break;
  //     case rangeId>=600 && rangeId <=622:
  //       this.setState({icon:this.weatherIcon.Snow});
  //       break;
  //     case rangeId>=701 && rangeId <=781:
  //       this.setState({icon:this.weatherIcon.Atmosphere});
  //       break;
  //     case rangeId==800:
  //       this.setState({icon:this.weatherIcon.Clear});
  //       break;
  //     case rangeId>=801 && rangeId <=804:
  //       this.setState({icon:this.weatherIcon.Clouds});
  //       break;
  //     default:
  //       this.setState({icon: this.weatherIcon.Clouds})
  //   }
  // }

  getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(this.getUserLocation, this.error);
  };

  error = (err) => {
    if (err.code === 1) {
      this.userEnteredLocation(this.state.location);
    }
  };

  // getUserLocation = (position) => {
  //   if (!this.state.location) {
  //     this.setState({
  //       latitude: position.coords.latitude,
  //       longitude: position.coords.longitude
  //     });
  //     this.getWeather();
  //   }
  //   this.locationEntered(this.state.location);
  // };

  locationEntered = (e) => {
    e.preventDefault();
    console.log("DATAEVENT",e)
    const city = e.target.elements.city.value;

    Geocode.fromAddress(city).then(
      (response) => {
       const lat = response.results[0].geometry.location.lat;
       const lng = response.results[0].geometry.location.lng;
       this.setState({ latitude: lat, longitude: lng });
       console.log(lat, lng);
       this.getWeather();
       console.log("DATA GEOCODE",this.state.data)
      },
      (error) => {
        console.error(error);
      }
    );
    //console.log("DATA2",this.state)
  }

  getWeather = async(e)=> {
    // console.log('EVENT', e)
    // e.preventDefault();
    // //const city = e.target.elements.city.value;
    // console.log('IT WORKS')
    

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.latitude}&lon=${this.state.longitude}&exclude=minutely,current,daily,alerts&appid=${API_KEY}&units=metric`
      );
      //const response = await api_call.json();
      console.log('DATA GETWEATHER', response.hourly)
  
      this.setState({
        data: response,
        // city: response.name,
        // country: response.sys.country,
        // celsius: this.calcCelsius(response.main.temp),
        // temp_max: this.calcCelsius(response.main.temp_max),
        // temp_min: this.calcCelsius(response.main.temp_min),
        // description: response.weather[0].description,
      });

      // console.log('Data', this.state)
      // this.state.data.hourly.map(key => (
      //   console.log(key.temp)
      // )
      //   )
      
      //this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);

  };

  componentDidMount() {
    this.getCurrentLocation();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.location !== this.state.location) {
  //     this.getCurrentLocation();
  //   }
  // }
    

  render() {
    console.log("DATA RENDER", this.state.data.hourly)
    //if (this.state.data.hourly) {
    let data = this.state.data.hourly;
    const listItems = this.state.data.hourly.map(({dt, temp: {day}, weather: [{description, icon, main, id}] }) => (
      <ul key={dt}>
      {/* <li>{moment(dt * 1000).format("dddd")}</li>
      <li>{moment(dt * 1000).format("MMMM Do, h:mm a")}</li> */}
      <li>
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="weather icon"
        />
      </li>
      <li>{Math.round(day - 273.15)}°C</li>
      <li>{description}</li>
    </ul>
  )
    )
    

    // ) 
      
      
    //   => (
    //   <tr key={key}>
    //     <td>{key.temp}</td>
    //     <td>{key.clouds}</td>
    //   </tr>))
    //   //console.log(key.temp)))
    // console.log('res', res)
    // }

//     return <tr key={data.dt}>
//     <td>{data.temp}</td>
//     <td>{data.clouds}</td>
//   </tr>
// });



    return(
      <div className="City">
              <Form loadweather={this.locationEntered} />
              {/* {forecast &&
              <Forecast data={this.state.data}/>} */}
              
              <>
        
        <h2>8 Day Weather Forecast</h2>
        {listItems && 
        <div>{listItems}</div>}
      </>

     
        {/* {<Weather 
        city={this.state.city} 
        country={this.state.country}
        temp_celsius={this.state.celsius}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        weatherIcon={this.state.icon}/> } */}
     </div>
    )
  }
}


export default City