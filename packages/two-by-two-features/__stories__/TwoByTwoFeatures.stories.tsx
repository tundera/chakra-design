import type { ComponentStoryObj, Meta } from '@storybook/react'

import {
  FcDoughnutChart,
  FcMultipleDevices,
  FcPrivacy,
  FcTimeline,
} from 'react-icons/fc'

import { TwoByTwoFeatures } from '../src/TwoByTwoFeatures'

export default {
  title: 'Marketing/Features/TwoByTwoFeatures',
  component: TwoByTwoFeatures,
} as Meta

export const Default: ComponentStoryObj<typeof TwoByTwoFeatures> = {
  args: {
    features: [
      {
        title: 'Secure by default',
        icon: <FcPrivacy />,
        description:
          'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.',
      },
      {
        title: 'Always up to date',
        icon: <FcTimeline />,
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
      },
      {
        title: 'Incredible statistics',
        icon: <FcDoughnutChart />,
        description:
          'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.',
      },
      {
        title: 'Support for multiple devices',
        icon: <FcMultipleDevices />,
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
      },
    ],
  },
}
