import React from 'react'
import CarouselItem from './CarouselItem'
import { carouselItems } from './MobileCarousel'

const DesktopCarousel = () => {
    
  return (
    <div>
        {carouselItems.map((item) => {
            return <CarouselItem key={item.key} image={item.image}/>
        })}
    </div>
  )
}

export default DesktopCarousel