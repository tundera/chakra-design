import type { ComponentStoryObj, Meta } from '@storybook/react'

import { CenteredWithSlider } from '../src/CenteredWithSlider'

export default {
  title: 'Marketing/Testimonials/CenteredWithSlider',
  component: CenteredWithSlider,
} as Meta

export const Default: ComponentStoryObj<typeof CenteredWithSlider> = {
  args: {
    quote: `'Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo expedita voluptas culpa sapiente alias molestiae. Numquam
              corrupti in laborum sed rerum et corporis."`,
    quotee: {
      name: 'Marrie Jones',
      jobTitle: 'Marketing Ads Strategist',
      imageSrc:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTN8fGxhZHklMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
  },
}
