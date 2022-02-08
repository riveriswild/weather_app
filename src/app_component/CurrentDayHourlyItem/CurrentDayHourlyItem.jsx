import React from "react";

const CurrentDayHourlyItem = ({ time, precipitation}) => (
    <div className="currentDayHourlyItem">
        <div className="currentDayHourlyItem__time">{time}</div>
        <div className="currentDayHourlyItem__precipitation">{precipitation}</div>
    </div>
)

export default CurrentDayHourlyItem