import React from 'react'
import BaseLayout from '../layouts/BaseLayout'
import Weather from '../components/weather/Weather'

const test = () => {
  return (
    <BaseLayout>
      <div className='main-container'>
        <Weather />
      </div>
    </BaseLayout>
  )
}

export default test