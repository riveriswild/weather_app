import React from "react";
import CurrentDayHourlyItem from "../CurrentDayHourlyItem/CurrentDayHourlyItem";
import './CurrentDayHourly.css'

const CurrentDayHourly = ({ forecast }) => (
    <div className="currentDayHourly">
        {forecast && forecast.map(item => (
            <CurrentDayHourlyItem {...item} key={item.name} />
        ))}
    </div>
)

export default CurrentDayHourly;