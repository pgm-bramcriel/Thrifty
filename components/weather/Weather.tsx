import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { WeatherContainer } from './style';

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
    <WeatherContainer className='main-container'>
      <p>{data.current.temp_c}°C</p>
      <figure>
        <Image src={`https:${data.current.condition.icon}`} alt='Icon' width={40} height={40}/>
      </figure>
    </WeatherContainer>
  )
}

export default Weather