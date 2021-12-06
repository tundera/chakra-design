import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from 'stories/TwoByTwoFeatures.stories'

const { Default } = composeStories(stories)

test('renders TwoByTwoFeatures component', () => {
  render(<Default />)

  const content = screen.getByText(/Secure by default/)

  expect(content).toBeInTheDocument()
})
