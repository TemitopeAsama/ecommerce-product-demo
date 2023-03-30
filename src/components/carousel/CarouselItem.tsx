import React from 'react'
import Image from 'next/image'

export type StaticImageData = {
    blurDataURL?: string | undefined,
    blurHeight?: number | undefined,
    blurWidth?: number | undefined,
    height: number,
    src: string,
    width: number
}

type CarouselImageProps = {
    image: StaticImageData
}

const CarouselItem = ({image}: CarouselImageProps) => {
  return (
    <div>
        <Image
        src={image}
        alt="Picture of the author"
        width={500}
        height={500}
        />
    </div>
  )
}

export default CarouselItem