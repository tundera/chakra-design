import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from 'stories/CtaSimpleCentered.stories'

const { Default } = composeStories(stories)

test('renders CtaSimpleCentered component', () => {
  render(<Default />)

  const content = screen.getByText(/Ready to Grow?/)

  expect(content).toBeInTheDocument()
})
