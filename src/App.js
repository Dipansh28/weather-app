import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './components/TopButtons';
import Inputs from './Inputs';
import TimeAndLocation from "./components/TimeAndLocation"
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './Services/weatherService';
import { useState, useEffect } from 'react';

function App() {

  const [query, setQuery] = useState ({q: 'berlin'})
  const [units, setUnits] = useState ('metric')
  const [weather, setWeather] = useState (null)

   useEffect(() => {
   const fetchWeather = async () => {
    const data = await getFormattedWeatherData({...query, units}).then((data) =>{
      setWeather(data);
    } );
   };

   fetchWeather();
  }, [query, units])

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl
    shadow-gray-400'>
      <TopButtons/>
      <Inputs/>

      {weather &&(
      <div>   
       <TimeAndLocation weather={weather}/>
       <TemperatureAndDetails weather={weather}/>

       <Forecast title= 'Hourly Forecast'/>
       <Forecast title= 'Daily Forecast'/>
      </div>
      )}

    </div>
  );
}

export default App;
