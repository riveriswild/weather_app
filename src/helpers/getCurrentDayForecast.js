import moment from "moment";
const getCurrentDayForecast = (data) => ({
    weekday: moment(data.dt*1000).format('dddd'),
    date: moment(data.dt*1000).format('MMMM Do'),
    temperature: Math.round(data.temp)+'°C',
    tempFeelsLike: data.feels_like,
    weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
    weatherDescription: data.weather[0].main,
});

export default getCurrentDayForecast;
