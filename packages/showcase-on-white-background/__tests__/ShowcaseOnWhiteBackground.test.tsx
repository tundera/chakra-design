import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from '../__stories__/ShowcaseOnWhiteBackground.stories'

const { Default } = composeStories(stories)

test('renders ShowcaseOnWhiteBackground component', () => {
  render(<Default />)

  const content = screen.getByText(/ShowcaseOnWhiteBackground Component/i)

  expect(content).toBeInTheDocument()
})
