import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'

import { CartItem } from './CartItem'
import { CartOrderSummary } from './CartOrderSummary'

type CartItem = {
  id: string
  price: number
  currency: string
  name: string
  description: string
  quantity: number
  imageUrl: string
}

export type CartWithDividerProps = {
  cartItems: CartItem[]
}

export const CartWithDivider = ({ cartItems }: CartWithDividerProps) => {
  return (
    <Box
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '8', md: '12' }}
      py={{ base: '8', md: '12' }}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'flex-start' }}
        spacing={{ base: '8', md: '16' }}
      >
        <Stack spacing={{ base: '8', md: '10' }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart (3 items)
          </Heading>

          <Stack spacing="6">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
}
