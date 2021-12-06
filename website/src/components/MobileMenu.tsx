import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalProps,
  Stack,
  ButtonProps,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import NextLink from 'next/link'

import ColorModeToggle from 'src/components/ColorModeToggle'

type Props = Omit<ModalProps, 'children'>

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

const MobileMenu = ({ isOpen, onClose }: Props) => {
  const hoverBg = useColorModeValue('blackAlpha.300', 'whiteAlpha.300')
  const bgColor = useColorModeValue('white', 'rgba(25, 25, 25, 1)')
  const color = useColorModeValue('black', 'white')

  const buttonStyle: ButtonProps = {
    as: 'a',
    borderRadius: 'none',
    py: 8,
    px: 2,
    minW: ['50px', '60px'],
    variant: 'ghost',
    colorScheme: 'blackAlpha',
    color,
    _hover: {
      bgColor: hoverBg,
    },
    _focus: { boxShadow: 'none' },
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xs">
      <ModalOverlay
        sx={{
          '@supports (backdrop-filter: blur(4px))': {
            backdropFilter: 'blur(4px)',
          },
          '@supports (-webkit-backdrop-filter: blur(4px))': {
            WebkitBackdropFilter: 'blur(4px)',
          },
        }}
      />
      <ModalContent borderRadius="2px" px={0} py={2} bgColor={bgColor}>
        <ModalBody p="inherit">
          <Stack w="full" spacing={0}>
            {links.map((data, idx) => (
              <NextLink href={data.url} passHref key={idx}>
                <Button
                  {...buttonStyle}
                  as="a"
                  w="full"
                  size="sm"
                  onClick={onClose}
                  rel={
                    data.text === 'Timeline' ? 'noopener noreferrer' : undefined
                  }
                  target={data.text === 'Timeline' ? '_blank' : undefined}
                  rightIcon={
                    data.text === 'Timeline' ? (
                      <FiExternalLink size="10px" />
                    ) : undefined
                  }
                >
                  {data.text}
                </Button>
              </NextLink>
            ))}
          </Stack>
        </ModalBody>
        <ModalFooter justifyContent="space-between">
          <ColorModeToggle ml="2" />
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default MobileMenu
