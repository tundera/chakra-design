import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from '../__stories__/PopupWithDiscount.stories'

const { Default } = composeStories(stories)

test('renders PopupWithDiscount component', () => {
  render(<Default />)

  const content = screen.getByText(/PopupWithDiscount Component/i)

  expect(content).toBeInTheDocument()
})
