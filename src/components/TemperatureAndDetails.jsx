import React from 'react'

import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>Cloudy and signs of meatballs</p>
      </div>

      <div className='flex flex-row items-center justify-between text-white py-3'>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="coloredCircle" className='w-20' />
        <p className='text-5xl'>34°</p>
        <div className='flex flex-col space-y-2'>
          <div className='flex font-light text-sm  justify-center self-start'>
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className='font-medium ml-1'> 32°</span>
          </div>
          <div className='flex font-light text-sm justify-center self-start'>
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className='font-medium ml-1'> 50%</span>
          </div>
          <div className='flex font-light text-sm justify-center self-start'>
            <UilWind size={18} className="mr-1" />
            Wind speed:
            <span className='font-medium ml-1'> 12km/h</span>
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center text-white text-sm py-3 space-x-2'>
        <UilSun />
        <p className='font-light'>Rise: <span className='font-medium ml-1'>06:45 AM</span></p>
        <p className='font-light'>|</p>

        <UilSunset />
        <p className='font-light'>Set: <span className='font-medium ml-1'>07:35 PM</span></p>
        <p className='font-light'>|</p>

        <UilArrowUp />
        <p className='font-light'>High: <span className='font-medium ml-1'>45°</span></p>
        <p className='font-light'>|</p>

        <UilArrowDown />
        <p className='font-light'>Low: <span className='font-medium ml-1'>30°</span></p>

      </div>

    </div>
  )
}

export default TemperatureAndDetails
