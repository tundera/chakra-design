import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from '../__stories__/FooterWithTwoColumns.stories'

const { Default } = composeStories(stories)

test('renders FooterWithTwoColumns component', () => {
  render(<Default />)

  const content = screen.getByText(/FooterWithTwoColumns Component/i)

  expect(content).toBeInTheDocument()
})
