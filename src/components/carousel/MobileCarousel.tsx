import React, { useState } from 'react'
import CarouselItem from './CarouselItem'
import IconButton from '../buttons/IconButton'
import useCart from '@/src/context/cartContext'
// import imgOne from '../../../public/images/image-product-1.jpg'
// import imgTwo from '../../../public/images/image-product-2.jpg'
// import imgThree from '../../../public/images/image-product-3.jpg'
// import imgFour from '../../../public/images/image-product-4.jpg'

// export const carouselItems = [
//   {
//     image: imgOne,
//     key: 1
//   },
//   {
//     image: imgTwo,
//     key: 2
//   },
//   {
//     image: imgThree,
//     key: 3
//   },
//   {
//     image: imgFour,
//     key: 4
//   }
// ]

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
    <div>
      <CarouselItem key={carouselItems[currentSlide].key} image={carouselItems[currentSlide].image}/>
      <IconButton ariaText='Move to Previous Slide' className='carousel__btn previous' handleClick={goToPreviousSlide}>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
      </IconButton>
      <IconButton ariaText='Move to Next Slide' className='carousel__btn next' handleClick={goToNextSlide}>
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
      </IconButton>
    </div>
  )
}

// 
export default MobileCarousel