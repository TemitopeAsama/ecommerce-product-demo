import React from 'react'
import Image from 'next/image'
import CarouselItem from './CarouselItem'
import { carouselItems } from './MobileCarousel'

const DesktopCarousel = () => {
    
  return (
    <div>
        <div>
            {carouselItems.map((item) => {
                return <CarouselItem key={item.key} image={item.image}/>
            })}
        </div>
        <div className='button__container'>
            {carouselItems.map((item) => {
                return (
                <button className="carousel__navigation" key={item.key}>
                    <Image
                        src={item.image}
                        alt="Picture of the author"
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