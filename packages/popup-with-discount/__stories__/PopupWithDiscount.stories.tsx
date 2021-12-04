import type { ComponentStoryObj, Meta } from '@storybook/react'

import { PopupWithDiscount } from '../src/PopupWithDiscount'

export default {
  title: 'E-commerce/StorePopups/PopupWithDiscount',
  component: PopupWithDiscount,
} as Meta

export const Default: ComponentStoryObj<typeof PopupWithDiscount> = {
  args: {
    children: 'PopupWithDiscount Component',
  },
}
