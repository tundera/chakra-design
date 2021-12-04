import { Box, Button, Heading, Text } from '@chakra-ui/react'

export type CtaSimpleCenteredProps = {
  title: string
  message: string
  actionLabel: string
}

export const CtaSimpleCentered = ({
  title,
  message,
  actionLabel,
}: CtaSimpleCenteredProps) => {
  return (
    <Box as="section">
      <Box
        maxW="2xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '20' }}
        textAlign="center"
      >
        <Heading size="3xl" fontWeight="extrabold" letterSpacing="tight">
          {title}
        </Heading>
        <Text mt="4" fontSize="lg">
          {message}
        </Text>
        <Button
          mt="8"
          as="a"
          href="#"
          size="lg"
          colorScheme="blue"
          fontWeight="bold"
        >
          {actionLabel}
        </Button>
      </Box>
    </Box>
  )
}
