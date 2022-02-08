import React from 'react';
import './CurrentDay.css'

const CurrentDay = ({ weekday, date, temperature, weatherDescription }) => (
    <div className="currentDayInfo"> 
       <div className="currentDayInfo__weekday">{weekday}</div>
       <div className="currentDayInfo__date">{date}</div>
       <div className="currentDayInfo__temp">{temperature}</div>
        <div className="currentDayInfo__description">{weatherDescription}</div>
    </div>

);

export default CurrentDay