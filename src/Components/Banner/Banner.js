import React, { useEffect } from 'react'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  useEffect(()=>{
    axios.get()
  }, [])
  
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>

            </div>
            <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</h1>
        </div>  
    <div className="fade_bottom"></div>        
    </div>
  )
}

export default Banner
