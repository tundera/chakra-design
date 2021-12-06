import type { ComponentStoryObj, Meta } from '@storybook/react'

import { FaBell } from 'react-icons/fa'

import { BannerWithButton } from 'src/BannerWithButton'

export default {
  title: 'Application/Banners/BannerWithButton',
  component: BannerWithButton,
} as Meta

export const Default: ComponentStoryObj<typeof BannerWithButton> = {
  args: {
    icon: FaBell,
    message: (
      <>
        Confirm your email. Check your email. We&apos;ve send a message to{' '}
        <b>sample@gmail.com</b>
      </>
    ),
    label: 'Resend email',
    onClick: () => console.log('Clicked'),
  },
}
