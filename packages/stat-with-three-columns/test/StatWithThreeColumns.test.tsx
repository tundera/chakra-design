import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from 'stories/StatWithThreeColumns.stories'

const { Default } = composeStories(stories)

test('renders StatWithThreeColumns component', () => {
  render(<Default />)

  const content = screen.getByText(/Total Subscribers/)

  expect(content).toBeInTheDocument()
})
