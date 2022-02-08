import React from "react";
import './WeatherForm.css'



const WeatherForm = ({ printLocation }) =>{
    const [location, setLocation] = React.useState('');

    const handleSubmit = (e) => {
        printLocation(location);
        e.preventDefault();
    }
    
    return(
        
            <div className="container">
            <form onSubmit= {e => {handleSubmit(e)}}>
            <div className="container_row">
                <div className="container_col">
                    <input type="text" className="container_inp" name="city" value={location} onChange={e => setLocation(e.target.value)} autoComplete="0ff" placeholder="City" />
                </div>
                <div className="container_col">
                    <button className="container_btn">Get Weather</button>
                </div>
            </div>
            </form>                
            </div>

        
    )
}

export default WeatherForm;
