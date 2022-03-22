import React, {useEffect, useState, useRef} from 'react'
import './HomePage.css'

export default function HomePage() {
    const timerRef = useRef(null)
    var imgIndex = 1
    useEffect(() => {
        showImg(1)

        callSetInterval()
    }, [])

    const callSetInterval = () => {
        timerRef.current = setInterval(() => {
            nextImg(1)
        }, 10000)
        return () => {
            clearInterval(timerRef.current)
        }
    }

    const nextImg = (n) => {
        showImg(imgIndex += n)
    }
    
    const currentImg = (n) => {
        clearInterval(timerRef.current)
        callSetInterval()
        showImg(imgIndex = n);
    }
    
    const showImg = (n) => {
        var i;
        var imgs = document.getElementsByClassName('home-banner-container-img')
        var btns = document.getElementsByClassName('home-carousel-btn')

        if(n > imgs.length) imgIndex = 1
        if (n < 1) imgIndex = imgs.length

        for (i = 0; i < imgs.length; i++) {
            imgs[i].style.display = "none";  
        }

        for (i = 0; i < btns.length; i++) {
            btns[i].id = btns[i].id.replace("home-active-btn", "");
        }

        imgs[imgIndex-1].style.display = "block";  
        btns[imgIndex-1].id = "home-active-btn";
    }
    
  return (
    <div className='home-carousel-container'>
        <div className='home-carousel'>
            <div className='home-banner-container'>
                <div className='home-carousel-carousel-img'>
                    <div className='home-banner-container-img'>
                        <img src='https://i.imgur.com/k7m1EwD.jpg' alt='Home Banner 1'></img>
                    </div>
                    <div className='home-banner-container-img'>
                        <img src='https://i.imgur.com/NkOTj0T.jpg' alt='Home Banner 2'></img>
                    </div>
                    <div className='home-banner-container-img'>
                        <img src='https://i.imgur.com/GSZNfly.jpg' alt='Home Banner 3'></img>
                    </div>
                </div>
                <div className='home-carousel-buttons'>
                    <div className='home-carousel-buttons-block'>
                        <span onClick={() => currentImg(1)} className='home-carousel-btn' id='home-active-btn'></span>
                        <span onClick={() => currentImg(2)} className='home-carousel-btn'></span>
                        <span onClick={() => currentImg(3)} className='home-carousel-btn'></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
