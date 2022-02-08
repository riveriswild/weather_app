import moment from 'moment';

const getTime = time => moment(time*1000).format('h a');

const getCurrentDayDetailedForecast = data => 
    data.hourly.map(day => ({
        temperature: Math.round(day.temp),
        time: getTime(day.dt),
    }));


export default getCurrentDayDetailedForecast;

