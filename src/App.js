/* eslint-disable default-case */
import React from 'react';
import './App.css';

import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './app_component/Page/Page';


function App(props) {
  return(
    (
      <div className="App">
        <Page />
        
      </div>
    )
  )
}


export default App;
