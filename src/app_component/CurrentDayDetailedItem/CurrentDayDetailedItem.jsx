import React from "react";

const CurrentDayDetailedItem = ({ time, temperature }) => (
    <div className="currentDayItem">
        <div className="currentDayItem__time">{time}</div>
        <div className="currentDayItem__temp">{temperature}°C</div>
    </div>
)

export default CurrentDayDetailedItem