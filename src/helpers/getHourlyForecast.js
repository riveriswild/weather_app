import moment from 'moment';

const getMinutesTime = time => moment(time*1000).format('h:mm');

const getHourlyForecast = data => 
    data.map(day => ({
        precipitation: Math.round(day.precipitation),
        time: getMinutesTime(day.dt),
    }));


export default getHourlyForecast;