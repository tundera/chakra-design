import type { ComponentStoryObj, Meta } from '@storybook/react'

import { SimpleFooter } from 'src/SimpleFooter'

export default {
  title: 'Marketing/Footers/SimpleFooter',
  component: SimpleFooter,
} as Meta

export const Default: ComponentStoryObj<typeof SimpleFooter> = {
  args: {
    children: 'SimpleFooter Component',
  },
}
