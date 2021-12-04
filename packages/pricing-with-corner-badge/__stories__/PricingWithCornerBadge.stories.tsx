import type { ComponentStoryObj, Meta } from '@storybook/react'

import { PricingWithCornerBadge } from '../src/PricingWithCornerBadge'

export default {
  title: 'Marketing/Pricing/PricingWithCornerBadge',
  component: PricingWithCornerBadge,
} as Meta

export const Default: ComponentStoryObj<typeof PricingWithCornerBadge> = {
  args: {
    children: 'PricingWithCornerBadge Component',
  },
}
