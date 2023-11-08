import React from 'react'

function TopButtons() {

  const cities = [
    {
      id: 1,
      title: 'london'
    },
    {
      id: 2,
      title: 'tokyo'
    },
    {
      id: 3,
      title: 'moscow'
    },
    {
      id: 4,
      title: 'bratislava'
    },
    {
      id: 5,
      title: 'prague'
    },
  ]

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) => (
        <button key={city.id} className='text-white text-lg font-medium capitalize'>
          {city.title}
        </button>
      ))}
    </div>
  )
}

export default TopButtons
