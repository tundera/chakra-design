import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from '../__stories__/CenteredWithSlider.stories'

const { Default } = composeStories(stories)

test('renders CenteredWithSlider component', () => {
  render(<Default />)

  const content = screen.getByText(/CenteredWithSlider Component/i)

  expect(content).toBeInTheDocument()
})
