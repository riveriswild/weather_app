import React from "react";
import UpcomingDaysItem from "../UpcomingDaysItem/UpcomingDaysItem";
import './UpcomingDays.css'


const UpcomingDays = ({ forecast }) => (
    <div className="upcomingDays">
        {forecast && forecast.map(item => (
            <UpcomingDaysItem {...item} key={item.name} />
        ))}
    </div>
)

export default UpcomingDays;