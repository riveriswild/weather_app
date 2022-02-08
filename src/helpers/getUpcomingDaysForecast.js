import moment from 'moment';

const getWeekday = date => moment(date*1000).format('dddd');

const getUpcomingDaysForecast = data =>
    data.map(day => ({
        imgUrl: day.weather[0].icon,
        temperature: Math.round(day.temp.day),
        weekday: getWeekday(day.dt)
    }));

export default getUpcomingDaysForecast;