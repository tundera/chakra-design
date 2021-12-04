import type { ReactNode } from 'react'

import { Flex, Heading } from '@chakra-ui/react'

interface Props {
  title: string
  action?: ReactNode
}

export const CardHeader = (props: Props) => {
  const { title, action } = props
  return (
    <Flex
      align="center"
      justify="space-between"
      px="6"
      py="4"
      borderBottomWidth="1px"
    >
      <Heading fontSize="lg">{title}</Heading>
      {action}
    </Flex>
  )
}
