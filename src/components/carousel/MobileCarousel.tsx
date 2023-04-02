import React, { useState } from 'react'
import CarouselItem from './CarouselItem'
import IconButton from '../buttons/IconButton'
import useCart from '@/src/context/cartContext'


const MobileCarousel = () => {
  const { carouselItems } = useCart()
  console.log(carouselItems);
  const [currentSlide, setCurrentSlide] = useState(0)
  const goToPreviousSlide = () => {
    return currentSlide > 0 && setCurrentSlide((currentSlide) => currentSlide - 1)
  }
  const goToNextSlide = () => {
    return currentSlide < 3 && setCurrentSlide((currentSlide) => currentSlide + 1)
  }
  return (
    <div className='mobile__carousel'>
      <CarouselItem key={carouselItems[currentSlide].key} image={carouselItems[currentSlide].image} className='mobile__carousel__container'/>
      <div className="arrow__flex">
        <IconButton ariaText='Move to Previous Slide' className='carousel__btn previous' handleClick={goToPreviousSlide}>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </IconButton>
        <IconButton ariaText='Move to Next Slide' className='carousel__btn next' handleClick={goToNextSlide}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </IconButton>
      </div>
    </div>
  )
}

// 
export default MobileCarousel