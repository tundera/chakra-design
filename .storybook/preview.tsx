import { useEffect } from 'react'
import {
  ChakraProvider,
  extendTheme,
  Flex,
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { Parameters, StoryContext } from '@storybook/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { withPerformance } from 'storybook-addon-performance'

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Direction for layout',
    defaultValue: 'LTR',
    toolbar: {
      icon: 'globe',
      items: ['LTR', 'RTL'],
    },
  },
}

const ColorModeToggleBar = () => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const nextMode = useColorModeValue('dark', 'light')

  return (
    <Flex justify="flex-end" mb={4} top="0" position="sticky" zIndex="9999">
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  )
}

const withChakra = (StoryFn: Function, context: StoryContext) => {
  const { direction } = context.globals
  const dir = direction.toLowerCase()

  useEffect(() => {
    document.documentElement.dir = dir
  }, [dir])

  return (
    <ChakraProvider theme={extendTheme({ direction: dir })}>
      <Box dir={dir} id="story-wrapper" w="full">
        <ColorModeToggleBar />
        <StoryFn />
      </Box>
    </ChakraProvider>
  )
}

export const parameters: Parameters = {
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

export const decorators = [withChakra, withPerformance]
