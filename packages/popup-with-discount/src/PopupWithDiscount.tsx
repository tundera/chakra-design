import {
  Box,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { Logo } from './Logo'
import { SubscribeForm } from './SubscribeForm'

export type PopupWithDiscountProps = {
  // children: ReactNode
}

export const PopupWithDiscount = ({}: PopupWithDiscountProps) => {
  return (
    <Box height="100vh">
      <Modal
        isOpen={true}
        onClose={() => void 0}
        size="2xl"
        // `trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly.
        blockScrollOnMount={false}
        trapFocus={false}
      >
        <ModalOverlay />
        <ModalContent borderRadius="2xl" mx="4">
          <ModalBody>
            <Stack
              maxW="xs"
              mx="auto"
              py={{ base: '12', md: '16' }}
              spacing={{ base: '6', md: '10' }}
            >
              <Logo height="5" />
              <Stack spacing="3" textAlign="center">
                <Text fontSize="lg">Enter your email below &amp; get</Text>
                <Text
                  color={useColorModeValue('blue.500', 'blue.200')}
                  fontWeight="extrabold"
                  fontSize={{ base: '5xl', md: '6xl' }}
                  textTransform="uppercase"
                  transform="scale(1.2)"
                >
                  20% off
                </Text>
                <Text fontSize="lg">
                  <Box as="span" whiteSpace="nowrap" fontWeight="bold">
                    on your next purchase
                  </Box>{' '}
                  + exclusive access to new products
                </Text>
              </Stack>
              <SubscribeForm />
              <Link
                fontSize="sm"
                textAlign="center"
                color={useColorModeValue('gray.600', 'gray.400')}
                textDecoration="underline"
              >
                No, I don’t want discounts
              </Link>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
