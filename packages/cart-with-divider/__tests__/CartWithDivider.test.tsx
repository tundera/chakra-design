import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from '../__stories__/CartWithDivider.stories'

const { Default } = composeStories(stories)

test('renders CartWithDivider component', () => {
  render(<Default />)

  const content = screen.getByText(/CartWithDivider Component/i)

  expect(content).toBeInTheDocument()
})
