import React, { Fragment } from 'react';

import WeatherForm from '../Form/WeatherForm'

import useGetForecast from '../../hooks/useGetForecast'
import Forecast from '../Forecast/Forecast';


const Page = () => {
    const {submitRequest, forecast } = useGetForecast()
    const onSubmit = (value) => {
        submitRequest(value)
    }

    
    return(
        <Fragment>
            <div className="weather_container">
            {/* form */}
            <WeatherForm printLocation={onSubmit} />
            </div>
            {forecast && <Forecast forecast={forecast} />}
        </Fragment>
    );
}

export default Page;