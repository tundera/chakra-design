import type { ComponentStoryObj, Meta } from '@storybook/react'

import { FooterWithTwoColumns } from 'src/FooterWithTwoColumns'

export default {
  title: 'Marketing/Footers/FooterWithTwoColumns',
  component: FooterWithTwoColumns,
} as Meta

export const Default: ComponentStoryObj<typeof FooterWithTwoColumns> = {}
