import Emoji from 'a11y-react-emoji'
import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  const bgColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('white', 'black')

  return (
    <Box bg={bgColor} color={textColor}>
      <Stack align="center" my={6}>
        <Text pt={2} fontWeight="bold">
          Made with <Emoji symbol="🔥" label="Fire emoji" /> in North Carolina
        </Text>
        <Text mt={2} fontSize="sm">
          © 2021 Philip Johnston. All rights reserved.
        </Text>
      </Stack>
    </Box>
  )
}

export default Footer
