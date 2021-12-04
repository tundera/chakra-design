import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from '../__stories__/CtaSimpleCentered.stories'

const { Default } = composeStories(stories)

test('renders CtaSimpleCentered component', () => {
  render(<Default />)

  const content = screen.getByText(/CtaSimpleCentered Component/i)

  expect(content).toBeInTheDocument()
})
