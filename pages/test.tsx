import React from 'react'
import BaseLayout from '../layouts/BaseLayout'
import Weather from '../components/weather/Weather'

const test = () => {
  return (
    <BaseLayout>
      <div className='main-container'>
        <form method="POST" onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}>
          <input type='file'></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </BaseLayout>
  )
}

export default test