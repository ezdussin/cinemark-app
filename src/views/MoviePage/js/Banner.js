import React from 'react'
import '../css/Banner.css'

export default function Banner({bannerURL}) {
  return (
    <div className='banner'>
        <img src={bannerURL} alt="Movie banner"></img>
    </div>
  )
}
