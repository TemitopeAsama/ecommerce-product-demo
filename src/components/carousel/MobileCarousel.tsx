import React from 'react'
import CarouselItem from './CarouselItem'
import imgOne from '../../../public/images/image-product-1.jpg'
import imgTwo from '../../../public/images/image-product-2.jpg'
import imgThree from '../../../public/images/image-product-3.jpg'
import imgFour from '../../../public/images/image-product-4.jpg'

export const carouselItems = [
  {
    image: imgOne,
    key: 1
  },
  {
    image: imgTwo,
    key: 2
  },
  {
    image: imgThree,
    key: 3
  },
  {
    image: imgFour,
    key: 4
  }
]

const MobileCarousel = () => {
  return (
    <div>
      {carouselItems.map((item) => {
        return <CarouselItem key={item.key} image={item.image}/>
      })}
      
    </div>
  )
}

// 
export default MobileCarousel