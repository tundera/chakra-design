import type { ComponentStoryObj, Meta } from '@storybook/react'

import { StatWithThreeColumns } from 'src/StatWithThreeColumns'

export default {
  title: 'Application/Stats/StatWithThreeColumns',
  component: StatWithThreeColumns,
} as Meta

export const Default: ComponentStoryObj<typeof StatWithThreeColumns> = {
  args: {
    stats: [
      { label: 'Total Subscribers', value: '71,887' },
      { label: 'Avg. Open Rate', value: '56.87%' },
      { label: 'Avg. Click Rate', value: '12.87%' },
    ],
  },
}
