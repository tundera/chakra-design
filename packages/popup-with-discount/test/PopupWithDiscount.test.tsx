import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from 'stories/PopupWithDiscount.stories'

const { Default } = composeStories(stories)

test('renders PopupWithDiscount component', () => {
  render(<Default />)

  const content = screen.getByText(/No, I don’t want discounts/)

  expect(content).toBeInTheDocument()
})
