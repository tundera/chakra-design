import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from '../__stories__/LoginWithCentredForm.stories'

const { Default } = composeStories(stories)

test('renders LoginWithCentredForm component', () => {
  render(<Default />)

  const content = screen.getByText(/LoginWithCentredForm Component/i)

  expect(content).toBeInTheDocument()
})
