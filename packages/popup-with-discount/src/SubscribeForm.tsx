import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'

export const SubscribeForm = () => (
  <Stack
    as="form"
    spacing="3"
    onSubmit={(e) => {
      e.preventDefault()
      // manage form submission
    }}
  >
    <FormControl id="email">
      <FormLabel srOnly>Enter your email</FormLabel>
      <Input
        type="email"
        placeholder="Enter your email"
        size="lg"
        fontSize="md"
        focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      />
    </FormControl>
    <Button
      type="submit"
      fontWeight="bold"
      textTransform="uppercase"
      fontSize="md"
      colorScheme="blue"
      size="lg"
    >
      Get my 20% off
    </Button>
  </Stack>
)
