import React, { useState } from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import CarouselItem from './CarouselItem'
import useCart from '@/src/context/cartContext'

const DesktopCarousel = () => {
    const { carouselItems } = useCart()
    const [currentSlide, setCurrentSlide] = useState(0)

    
  return (
    <div className='desktop__carousel'>
        <div>
            <CarouselItem key={carouselItems[currentSlide].key} image={carouselItems[currentSlide].image} className='desktop__carousel__container'/>
        </div>
        <div className='button__container'>
            {carouselItems.map((item, itemIndex) => (
                <button className="carousel__navigation" key={itemIndex}>
                    <Image
                        src={item.image}
                        className='button__image'
                        alt="Sneaker showcase slide"
                        onClick={(e) => setCurrentSlide(itemIndex)}
                        style={{ border: currentSlide === itemIndex ? '2px solid hsl(26, 100%, 55%)' : 'none', transition: 'border 150ms ease-in-out'}}
                    />
                </button>
            ))}
        </div>
    </div>
  )
}

export default DesktopCarousel