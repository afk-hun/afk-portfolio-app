import { useEffect, useState } from 'react'
import { BackgroundImage } from '../types'

export function useResponsiveImage() {
  const [src, setSrc] = useState<'mobile' | 'tablet' | 'desktop' | null>(null)

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth
      if (width <= 768) {
        setSrc('mobile')
      } else if (width <= 1024) {
        setSrc('tablet')
      } else {
        setSrc('desktop')
      }
    }

    updateImage() // Set initial image
    window.addEventListener('resize', updateImage)
    return () => window.removeEventListener('resize', updateImage)
  }, [])

  return src
}
