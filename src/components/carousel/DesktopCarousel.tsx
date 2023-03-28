import React from 'react'
import CarouselItem from './CarouselItem'
import { carouselItems } from './MobileCarousel'
import imgOne from '../../../public/images/image-product-1.jpg'
import imgTwo from '../../../public/images/image-product-2.jpg'
import imgThree from '../../../public/images/image-product-3.jpg'
import imgFour from '../../../public/images/image-product-4.jpg'

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