import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from 'stories/FooterWithTwoColumns.stories'

const { Default } = composeStories(stories)

test('renders FooterWithTwoColumns component', () => {
  render(<Default />)

  const content = screen.getByText(/All rights reserved./)

  expect(content).toBeInTheDocument()
})
