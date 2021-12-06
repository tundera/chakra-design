import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import NextLink from 'next/link'

type CtaWithDescriptionProps = {
  title: string
  subtitle: string
  description: string
  link?: {
    href: string
    label: string
  }
}

const CallToAction = ({
  title,
  subtitle,
  description,
  link,
}: CtaWithDescriptionProps) => {
  const textColor = useColorModeValue('white', 'black')
  const bgColor = useColorModeValue('black', 'white')
  const textHoverColor = useColorModeValue('gray.300', 'gray.800')
  const bgHoverColor = useColorModeValue('gray.800', 'gray.300')
  const bgGradient = useColorModeValue(
    'linear(to-t, blue.300, black)',
    'linear(to-t, white, blue.800)'
  )

  return (
    <Stack
      bgGradient={bgGradient}
      height="100vh"
      width="100vw"
      justifyContent="center"
      py={{ base: 0, md: 16 }}
    >
      <Box
        textAlign="center"
        mx="auto"
        py={{ base: '12', lg: '16' }}
        px={{ base: '4', sm: '6', lg: '8' }}
        zIndex={10}
        color={textColor}
      >
        <Heading
          as="h2"
          fontSize={{ base: '4xl', sm: '6xl' }}
          fontWeight="extrabold"
        >
          <chakra.span display="block">{title}</chakra.span>
          <chakra.span
            display="block"
            fontSize={{ base: '3xl', sm: '4xl' }}
            color="indigo.500"
          >
            {subtitle}
          </chakra.span>
        </Heading>
        <Text fontSize="xl" mt="4" maxW="md" mx="auto">
          {description}
        </Text>
        {link && (
          <Flex justify="center" mt={{ lg: '0' }} flexShrink={{ lg: 0 }}>
            <Box mt="12" display="inline-flex" rounded="md">
              <NextLink href={link.href} passHref>
                <Button
                  as="a"
                  type="button"
                  shadow="md"
                  bg={bgColor}
                  transition="ease-in"
                  transitionDuration="200ms"
                  w="full"
                  textAlign="center"
                  fontSize="md"
                  fontWeight="semibold"
                  py="2"
                  px="4"
                  rounded="lg"
                  _hover={{ bg: bgHoverColor, color: textHoverColor }}
                  _active={{ bg: bgHoverColor, color: textHoverColor }}
                >
                  {link.label}
                </Button>
              </NextLink>
            </Box>
          </Flex>
        )}
      </Box>
    </Stack>
  )
}

export default CallToAction
