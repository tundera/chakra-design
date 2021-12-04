import type { ReactNode } from 'react'

import { Box, useColorModeValue } from '@chakra-ui/react'

import { Card } from './Card'
import { CardContent } from './CardContent'
import { CardHeader } from './CardHeader'

export type CardWithUserDetailsProps = {
  children: ReactNode
  action?: ReactNode
}

export const CardWithUserDetails = ({
  action,
  children,
}: CardWithUserDetailsProps) => {
  return (
    <Box
      as="section"
      bg={useColorModeValue('gray.100', 'inherit')}
      py="12"
      px={{ md: '8' }}
    >
      <Card maxW="3xl" mx="auto">
        <CardHeader title="Account Info" action={action} />
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  )
}
