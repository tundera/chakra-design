import type { ComponentStoryObj, Meta } from '@storybook/react'

import { LoginWithCentredForm } from '../src/LoginWithCentredForm'

export default {
  title: 'Application/Authentication/LoginWithCentredForm',
  component: LoginWithCentredForm,
} as Meta

export const Default: ComponentStoryObj<typeof LoginWithCentredForm> = {
  args: {
    children: 'LoginWithCentredForm Component',
  },
}
