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
    image: StaticImageData,
    className: string
}

const CarouselItem = ({image, className}: CarouselImageProps) => {
  return (
    <div style={{ position: 'relative' }} className={className}>
        <Image
        src={image}
        alt="Picture of the author"
        style={{ height: '100%', objectFit: "cover" }}
        // priority={true}
        />
    </div>
  )
}

export default CarouselItem
