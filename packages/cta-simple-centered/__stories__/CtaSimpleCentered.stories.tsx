import type { ComponentStoryObj, Meta } from '@storybook/react'

import { CtaSimpleCentered } from '../src/CtaSimpleCentered'

export default {
  title: 'Marketing/CallToActions/CtaSimpleCentered',
  component: CtaSimpleCentered,
} as Meta

export const Default: ComponentStoryObj<typeof CtaSimpleCentered> = {
  args: {
    title: 'Ready to Grow?',
    message:
      'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.',
    actionLabel: 'Start Free Trial',
  },
}
