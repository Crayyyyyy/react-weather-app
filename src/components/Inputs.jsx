import React from 'react'
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs() {
  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>

        <input
          type="text"
          placeholder='Search for a city...'
          className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
        />

        <UilSearch size={25} className="text-white cursor-pointer transition duration-75 ease-out hover:scale-150" />
        <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-150" />

      </div>

      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='metric' className='text-xl text-white mr-2 '>&#8451;</button>
        {/* <p className='text-xl text-white mx-1'>|</p> */}
        <button name='metric' className='text-xl text-white ml-2'>&#8457;</button>
      </div>

    </div>
  )
}

export default Inputs
