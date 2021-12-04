import { extendTheme } from '@chakra-ui/react'

import colors from './colors'
import fonts from './fonts'
import styles from './styles'

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles,
  fonts,
  colors,
})
