import ImageSlider from '@/components/Landing/ImageSlider'
import { getLandingBackgroundImages } from '@/utils/api/localAPI'

export default async function LandingPage() {
  const images = await getLandingBackgroundImages()
  return (
    <section className="w-screen h-screen sm:p-2 md:p-4 lg:p-6">
      <ImageSlider images={images} />
    </section>
  )
}
