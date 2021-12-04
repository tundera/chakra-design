import {
  Stat as ChakraStat,
  StatProps,
  useColorModeValue,
} from '@chakra-ui/react'

export const Stat = (props: StatProps) => (
  <ChakraStat
    px={{ base: 4, sm: 6 }}
    py="5"
    bg={useColorModeValue('white', 'gray.700')}
    shadow="base"
    rounded="lg"
    {...props}
  />
)
