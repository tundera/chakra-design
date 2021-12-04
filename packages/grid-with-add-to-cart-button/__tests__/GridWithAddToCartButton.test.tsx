import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from '../__stories__/GridWithAddToCartButton.stories'

const { Default } = composeStories(stories)

test('renders GridWithAddToCartButton component', () => {
  render(<Default />)

  const content = screen.getByText(/GridWithAddToCartButton Component/i)

  expect(content).toBeInTheDocument()
})
