import { getPayload } from 'payload'
import config from '@payload-config'
import { BackgroundImage } from '@/utils/types'

export async function getLandingBackgroundImages(): Promise<BackgroundImage[]> {
  const payload = await getPayload({ config })
  const result = await payload.findGlobal({
    slug: 'landing',
  })

  return result.backgrounds as BackgroundImage[]
}
