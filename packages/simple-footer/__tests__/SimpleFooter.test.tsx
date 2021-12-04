import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from '../__stories__/SimpleFooter.stories'

const { Default } = composeStories(stories)

test('renders SimpleFooter component', () => {
  render(<Default />)

  const content = screen.getByText(/SimpleFooter Component/i)

  expect(content).toBeInTheDocument()
})
