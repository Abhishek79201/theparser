import React from 'react'
import Timer from './Countdown/Timer'
import Contact from '../ContactUs/Contact'

const Home = () => {
  return (
    <>
      <div className='App'>
        <div className='container flex flex-col gap-4'>
          <h1>
            Website
            <br />
            Coming Soon
          </h1>
          <Timer />
        </div>
      </div>
      <div className='Contact m-auto flex justify-center'>
        <h1 className='title'>Contact Us</h1>
        <Contact />
      </div>
    </>
  )
}

export default Home
