import React from 'react';
import CurrentDayDetailedItem from '../CurrentDayDetailedItem/CurrentDayDetailedItem';
import './CurrentDayDetailed.css'

const CurrentDayDetailed = ({ forecast }) => (
    <div className="currentDayDetailed"> 
    {forecast && forecast.map(item => (
        <div className="currentDayItem"><CurrentDayDetailedItem {...item} key={item.name} /></div>
        
    ))}
    </div>

)

export default CurrentDayDetailed