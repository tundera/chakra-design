import {
  useColorModeValue,
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import ColorModeToggle from 'src/components/ColorModeToggle'
import NavButton from 'src/components/NavButton'
import dynamic from 'next/dynamic'

const MobileMenu = dynamic(() => import('src/components/MobileMenu'))

const Header = () => {
  const bgColor = useColorModeValue('black', 'white')
  const textColor = useColorModeValue('white', 'black')
  const boxShadow = useColorModeValue(
    'rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset',
    'rgba(255, 255, 255, 0.1) 0px -1px 0px 0px inset'
  )

  const borderBottomColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.200')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const links = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Demo',
      url: '/locations',
    },
  ]

  return (
    <Box
      as="nav"
      bgColor={bgColor}
      color={textColor}
      zIndex="sticky"
      py={2}
      w="full"
      sx={{
        '@supports (backdrop-filter: saturate(1.8) blur(5px))': {
          backdropFilter: 'saturate(1.8) blur(5px)',
          bgColor,
        },
        '@supports (-webkit-backdrop-filter: saturate(1.8) blur(5px))': {
          WebkitBackdropFilter: 'saturate(1.8) blur(5px)',
          bgColor,
        },
        '@supports not (backdrop-filter: saturate(1.8) blur(5px))': {
          bgColor,
        },
      }}
      boxShadow={boxShadow}
      borderBottomColor={borderBottomColor}
      borderBottomWidth="2px"
      pos="sticky"
      top={0}
    >
      <Flex mx="auto" w="full" maxW="container.xl" pos="relative" py={2} px={2}>
        {/* normal nav */}
        <Flex
          display={['none', 'flex']}
          justifyContent="space-between"
          flex="1"
        >
          <HStack spacing={4} mx={2}>
            {links.map((link) => (
              <NavButton href={link.url} key={link.text}>
                {link.text}
              </NavButton>
            ))}
          </HStack>
          <ColorModeToggle ml="auto" mr="2" alignSelf="center" />
        </Flex>
        <Flex
          d={['flex', 'none']}
          justifyContent="flex-end"
          alignItems="center"
          flex="1"
        >
          <IconButton
            as="button"
            onClick={onOpen}
            color={textColor}
            variant="ghost"
            aria-label="Open navigation menu"
            icon={<FiMenu />}
          />
        </Flex>
        {/* mobile nav */}
        <MobileMenu isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Box>
  )
}

export default Header
