import type { ComponentStoryObj, Meta } from '@storybook/react'

import { ShowcaseOnWhiteBackground } from '../src/ShowcaseOnWhiteBackground'

export default {
  title: 'E-commerce/ProductShowcases/ShowcaseOnWhiteBackground',
  component: ShowcaseOnWhiteBackground,
} as Meta

export const Default: ComponentStoryObj<typeof ShowcaseOnWhiteBackground> = {
  args: {
    children: 'ShowcaseOnWhiteBackground Component',
  },
}
