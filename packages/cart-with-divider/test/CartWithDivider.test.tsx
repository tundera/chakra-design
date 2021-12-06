import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from 'stories/CartWithDivider.stories'

const { Default } = composeStories(stories)

test('renders CartWithDivider component', () => {
  render(<Default />)

  const content = screen.getByText(/Ferragamo bag/i)

  expect(content).toBeInTheDocument()
})
