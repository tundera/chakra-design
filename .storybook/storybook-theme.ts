import { create } from '@storybook/theming'
// @ts-ignore
import brandImage from './storybook-logo.svg'

export default create({
  base: 'light',
  brandTitle: 'Some UI',
  brandUrl: 'https://chakra-ui.com',
  brandImage,
})
