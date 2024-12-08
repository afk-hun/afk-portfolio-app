'use client'

import { useResponsiveImage } from '@/utils/hooks/display'
import { BackgroundImage } from '@/utils/types'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ImageSliderProps {
  images: BackgroundImage[]
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const display = useResponsiveImage()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images && images.length > 1) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [images])

  return (
    <>
      {display && images.length > 0 && (
        <>
          {images.map((image, i) => {
            return (
              <Image
                className={`
				w-full 
				h-full 
				overflow-hidden 
				object-cover 
				sm:p-2 md:p-4 lg:p-6 
				sm:rounded-[2rem] md:rounded-[3rem] lg:rounded-[3rem]
				transition-all duration-700 ease-in-out
				${index === i ? 'scale-100 translate-x-0 opacity-100' : 'opacity-0'}
				`}
                key={i}
                src={image[display].url!}
                alt={image[display].alt}
                fill
              />
            )
          })}
        </>
      )}
      {images.length == 0 && <span>Nothing is here</span>}
    </>
  )
}
