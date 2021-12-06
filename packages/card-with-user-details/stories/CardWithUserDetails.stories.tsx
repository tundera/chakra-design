import type { ComponentStoryObj, Meta } from '@storybook/react'

import { Button } from '@chakra-ui/react'
import { HiPencilAlt } from 'react-icons/hi'

import { CardWithUserDetails } from 'src/CardWithUserDetails'
import { Property } from 'src/Property'

export default {
  title: 'Application/Cards/CardWithUserDetails',
  component: CardWithUserDetails,
} as Meta

export const Default: ComponentStoryObj<typeof CardWithUserDetails> = {
  args: {
    children: (
      <>
        <Property label="Name" value="Chakra UI" />
        <Property label="Email" value="chakra-ui.sh@gmail.com" />
        <Property label="Member since" value="February, 2021" />
        <Property label="Subscription Plan" value="Starter Pro" />
      </>
    ),
  },
}

export const Editable: ComponentStoryObj<typeof CardWithUserDetails> = {
  args: {
    children: (
      <>
        <Property label="Name" value="Chakra UI" />
        <Property label="Email" value="chakra-ui.sh@gmail.com" />
        <Property label="Member since" value="February, 2021" />
        <Property label="Subscription Plan" value="Starter Pro" />
      </>
    ),
    action: (
      <Button variant="outline" minW="20" leftIcon={<HiPencilAlt />}>
        Edit
      </Button>
    ),
  },
}
