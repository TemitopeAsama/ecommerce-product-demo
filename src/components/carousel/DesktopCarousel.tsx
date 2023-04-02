import React, { useState } from 'react'
import Image from 'next/image'
import CarouselItem from './CarouselItem'
import useCart from '@/src/context/cartContext'
// import { carouselItems } from './MobileCarousel'

const DesktopCarousel = () => {
    const { carouselItems } = useCart()
    const [currentSlide, setCurrentSlide] = useState(0)
    
  return (
    <div className='desktop__carousel'>
        <div>
            <CarouselItem key={carouselItems[currentSlide].key} image={carouselItems[currentSlide].image} className='desktop__carousel__container'/>
        </div>
        <div className='button__container'>
            {carouselItems.map((item) => {
                return (
                <button className="carousel__navigation" key={item.key} onClick={(e) => {item.key > 0 && setCurrentSlide(item.key - 1)}}>
                    <Image
                        src={item.image}
                        alt="Sneaker showcase slide"
                        style={{objectFit:"cover", width: '100%', height: '100%'}}
                    />
                </button>
            )})}
        </div>
    </div>
  )
}

// <button className="carousel__navigation"></button>
export default DesktopCarousel