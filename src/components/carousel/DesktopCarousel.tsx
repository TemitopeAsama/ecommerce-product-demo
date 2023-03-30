import React, { useState } from 'react'
import Image from 'next/image'
import CarouselItem from './CarouselItem'
import useCart from '@/src/context/cartContext'
// import { carouselItems } from './MobileCarousel'

const DesktopCarousel = () => {
    const { carouselItems } = useCart()
    const [currentSlide, setCurrentSlide] = useState(0)
    
  return (
    <div>
        <div>
            <CarouselItem key={carouselItems[currentSlide].key} image={carouselItems[currentSlide].image}/>
        </div>
        <div className='button__container'>
            {carouselItems.map((item) => {
                return (
                <button className="carousel__navigation" key={item.key} onClick={(e) => {item.key > 0 && setCurrentSlide(item.key - 1)}}>
                    <Image
                        src={item.image}
                        alt="Sneaker showcase slide"
                        width={50}
                        height={50}
                        style={{objectFit:"cover"}}
                    />
                </button>
            )})}
        </div>
    </div>
  )
}

// <button className="carousel__navigation"></button>
export default DesktopCarousel