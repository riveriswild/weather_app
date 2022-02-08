import React from "react";
const imgUrlBase = 'http://openweathermap.org/'
const UpcomingDaysItem = ({ imgUrl, temperature, weekday}) => (
    <div className="upcomingDaysItem">
        <div className="upcomingDaysItem_weekday">{weekday}</div>
        <img src={`${imgUrlBase}img/wn/${imgUrl}.png`}></img> 
        <div className="upcomingDaysItem_temp">{temperature}°C</div>
    </div>
)

export default UpcomingDaysItem