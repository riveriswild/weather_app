import React from 'react';
import { Container } from 'react-bootstrap'


import CurrentDay from '../CurrentDay/CurrentDay';
import CurrentDayDetailed from '../CurrentDayDetailed/CurrentDayDetailed';
import CurrentDayHourly from '../CurrentDayHourly/CurrentDayHourly';
import UpcomingDays from '../UpcomingDays/UpcomingDays';
const Forecast = ({ forecast }) => (
    <div className='forecast'>
        <div className="currentDay">
            {forecast&&<CurrentDay {...forecast.current.currentDay} />}
            <CurrentDayDetailed forecast={forecast.current.currentDayDetails} />
            <CurrentDayHourly forecast={forecast.current.detailedHourly} />
            <UpcomingDays forecast={forecast.current.upcomingDays} /> 
        </div>
    </div>

)

export default Forecast;