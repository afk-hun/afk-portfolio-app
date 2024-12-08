import { GlobalConfig } from 'payload'

export const Landing: GlobalConfig = {
  slug: 'landing',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'sub-title',
      type: 'text',
      label: 'Sub Title',
      required: true,
    },
    {
      name: 'backgrounds',
      type: 'array',
      label: 'Backgrounds',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'mobile',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                width: '30%',
              },
            },
            {
              name: 'tablet',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                style: {
                  width: '30%',
                },
              },
            },
            {
              name: 'desktop',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                style: {
                  width: '30%',
                },
              },
            },
          ],
        },
      ],
    },
  ],
}
