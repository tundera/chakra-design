import type { FC } from 'react'

import { useColorModeValue, Flex } from '@chakra-ui/react'

const Container: FC = ({ children }) => {
  const bg = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')
  const color = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      as="main"
      flexGrow={1}
      bg={bg}
      color={color}
    >
      {children}
    </Flex>
  )
}

export default Container
