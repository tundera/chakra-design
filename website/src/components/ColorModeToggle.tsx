import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

type Props = Omit<IconButtonProps, 'aria-label'>

const ColorModeToggle = (props: Props) => {
  const { toggleColorMode } = useColorMode()

  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FiMoon, FiSun)

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  )
}

export default ColorModeToggle
