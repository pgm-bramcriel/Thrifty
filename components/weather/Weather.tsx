import React, { useEffect, useState } from 'react'

const Weather = () => {
  const [data, setData]: any = useState()
  const [isLoading, setLoading] = useState(false)

  const key = 'c112234eb3cc44e4a50145748222202';

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=Ghent&aqi=no`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  console.log(data);

  return (
    <div className='main-container'>Current temp: {data.current.temp_c} celcius</div>
  )
}

export default Weather