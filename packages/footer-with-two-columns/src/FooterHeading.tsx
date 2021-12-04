import { HeadingProps } from '@chakra-ui/layout'
import { Heading, useColorModeValue } from '@chakra-ui/react'

export const FooterHeading = (props: HeadingProps) => (
  <Heading
    as="h4"
    color={useColorModeValue('gray.600', 'gray.400')}
    fontSize="sm"
    fontWeight="semibold"
    textTransform="uppercase"
    letterSpacing="wider"
    {...props}
  />
)
