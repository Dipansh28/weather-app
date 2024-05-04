import React from 'react';
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";

function TemperatureAndDetails({weather:{
  details,
  icon, 
  temp, 
  temp_min, 
  temp_max, 
  sunrise, 
  sunset, 
  speed, 
  humidity, 
  feels_like, 
  timezone
}}) {
  return (
    <div>
        
       <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
         <p>{details}</p>
       </div>

      <div className='flex flex-row items-center justify-between text-white py-3'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaU7aVWzPRMBAsUzfYtzKe9wNYxZfEwrbkH_lyPj_8xrhCp6yzIAx50QSsvEMGiQt2fHU&usqp=CAU' alt='' className='w-20'/>
           <p className='text-5xl'> 34° </p>
           <div className='flex flex-col space-y-2'>

              <div className='flex font-light text-sm items-center justify-center'>
                <UilTemperature size={18} className= 'mr-1'/>
                Real fell:
                <span className='font-medium ml-1 '> 32° </span>
              </div>

               <div className='flex font-light text-sm items-center justify-center'>
                <UilTear size={18} className= 'mr-1'/>
                Humidity:
                <span className='font-medium ml-1 '> 65% </span>
              </div>

               <div className='flex font-light text-sm items-center justify-center'>
                <UilWind size={18} className= 'mr-1'/>
                Wind:
                <span className='font-medium ml-1 '> 11 KM/H </span>
              </div>
              
           </div>
      </div>

      <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
         
         <UilSun/>
         <p className='font-light'> 
           Rise: <span className='font-medium ml-1'> 09:56 PM </span> 
         </p>

         <p className='font-light'></p>

         <UilSunset/>
         <p className='font-light'> 
           Set: <span className='font-medium ml-1'> 07:40 PM </span> 
         </p>

         <p className='font-light'></p>

         <UilSun/>
         <p className='font-light'> 
           High: <span className='font-medium ml-1'> 43° </span> 
         </p>

         <p className='font-light'></p>

         <UilSun/>
         <p className='font-light'> 
           Low: <span className='font-medium ml-1'> 30° </span> 
         </p>

      </div>

    </div>
  )
}

export default TemperatureAndDetails
