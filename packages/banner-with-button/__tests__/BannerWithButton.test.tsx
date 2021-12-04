import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from '../__stories__/BannerWithButton.stories'

const { Default } = composeStories(stories)

test('renders BannerWithButton component', () => {
  render(<Default />)

  const content = screen.getByText(/Confirm your email. Check your email./i)

  expect(content).toBeInTheDocument()
})
