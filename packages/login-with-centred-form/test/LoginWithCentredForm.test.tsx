import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from 'stories/LoginWithCentredForm.stories'

const { Default } = composeStories(stories)

test('renders LoginWithCentredForm component', () => {
  render(<Default />)

  const title = screen.getByText(/Sign in to your account/)
  expect(title).toBeInTheDocument()

  const subtitle = screen.getByText(/Don't have an account?/)
  expect(subtitle).toBeInTheDocument()
})
