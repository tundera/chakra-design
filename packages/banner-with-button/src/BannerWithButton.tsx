import type { ReactNode } from 'react'
import type { As } from '@chakra-ui/react'

import {
  useColorModeValue,
  Box,
  Stack,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react'

import { BannerLink } from './BannerLink'

export type BannerWithButtonProps = {
  icon: As<any>
  message: ReactNode
  label: string
  onClick: () => void
}

export const BannerWithButton = ({
  icon,
  message,
  label,
  onClick,
}: BannerWithButtonProps) => {
  return (
    <Box as="section" pt="8" pb="12">
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        py="3"
        px={{ base: '3', md: '6', lg: '8' }}
        color="white"
        bg={useColorModeValue('blue.600', 'blue.400')}
      >
        <HStack spacing="3">
          <Icon as={icon} fontSize="2xl" h="10" />
          <Text fontWeight="medium" marginEnd="2">
            {message}
          </Text>
        </HStack>
        <BannerLink
          w={{ base: 'full', sm: 'auto' }}
          flexShrink={0}
          onClick={onClick}
        >
          {label}
        </BannerLink>
      </Stack>
    </Box>
  )
}
