import type { ComponentStoryObj, Meta } from '@storybook/react'

import { PricingWithCornerBadge } from 'src/PricingWithCornerBadge'

export default {
  title: 'Marketing/Pricing/PricingWithCornerBadge',
  component: PricingWithCornerBadge,
} as Meta

export const Default: ComponentStoryObj<typeof PricingWithCornerBadge> = {
  args: {
    cardsData: [
      {
        price: '$29',
        name: 'Application UI',
        features: [
          'All application UI components',
          'Lifetime access',
          'Use on unlimited projects',
          'Free Updates',
        ],
      },
      {
        price: '$49',
        name: 'Bundle',
        features: [
          'All application UI components',
          'Lifetime access',
          'Use on unlimited projects',
          'Use on unlimited projects',
          'Free Updates',
        ],
      },
      {
        price: '$29',
        name: 'Marketing UI',
        features: [
          'All application UI components',
          'Lifetime access',
          'Use on unlimited projects',
          'Free Updates',
        ],
      },
    ],
  },
}
