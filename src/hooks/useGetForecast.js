import { React, useState, useRef } from "react";
import axios from 'axios';
import Geocode from "react-geocode";

import getCurrentDayForecast from '../helpers/getCurrentDayForecast.js'
import getCurrentDayDetailedForecast from "../helpers/getCurrentDayDetailedForecast.js";
import getUpcomingDaysForecast from "../helpers/getUpcomingDaysForecast.js";
import getHourlyForecast from "../helpers/getHourlyForecast.js";


const API_KEY = "4227fada9bed98e3e74d06c609146310";
const GEOAPI_KEY = "AIzaSyDXn4LTUz-uH-4nxMU9xvKDgL0KW43cd5I"
Geocode.setApiKey("AIzaSyDXn4LTUz-uH-4nxMU9xvKDgL0KW43cd5I");
Geocode.setRegion("ru");

 /* кастомный хук, иначе все рендерится по предыдущему state */

function useAsyncReference(value) 
{   
   const ref = useRef(value);   
   const [, forceRender] = useState(false);    
   const updateState = (newState) => 
   {     
      ref.current = newState;     
      forceRender(s => !s);   
   }    
return [ref, updateState]; 
}

const useGetForecast = () => {

    const[forecast, setForecast] = useAsyncReference({});
    
 /* получение координат по введенному пользователем названию города */

    const getCoord = async(location) => {
        const coord = await Geocode.fromAddress(location)
        const lat = coord.results[0].geometry.location.lat;
        const lng = coord.results[0].geometry.location.lng;
        const cityC = {lat, lng}
        return cityC
        
    }

 /* получение данных о погоде по координатам */

    const getForecastData = async(latitude, longitude) => {
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`);
        if (!data || data.length === 0) {
            console.log('smth went wrong')
            return;
        }
        return data
    }

     /* разбивка полученных данных на данные о текущем дне, деталях текущего дня, данные на следующую неделю
     и данные на ближайший час (там есть только осадки, потому что сервис выдает на ближайший час только их) */

    const gatherForecastData = (data, location) => {
        const currentDay = getCurrentDayForecast(data.data.current)
        const currentDayDetails = getCurrentDayDetailedForecast(data.data)
        const upcomingDays = getUpcomingDaysForecast(data.data.daily)
        const detailedHourly = getHourlyForecast(data.data.minutely)
        setForecast({ currentDay, currentDayDetails, upcomingDays, detailedHourly })
        console.log('fk',forecast)
    }

     /* непосредственно запрос с использованием всего вышеперечисленного */

    const submitRequest = async(location) => {
        const loc = await getCoord(location);
        const latitude = loc.lat;
        const longitude = loc.lng;
        const data = await getForecastData(latitude, longitude);
        if (!data) return;
        await gatherForecastData(data)
        console.log(forecast.current.currentDayDetails)
        console.log('data', data)
        
    }

    return {
        submitRequest,
        forecast
    }


    
}

export default useGetForecast;