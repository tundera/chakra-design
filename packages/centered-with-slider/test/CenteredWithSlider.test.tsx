import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from 'stories/CenteredWithSlider.stories'

const { Default } = composeStories(stories)

test('renders CenteredWithSlider component', () => {
  render(<Default />)

  const name = screen.getByText('Marrie Jones')

  expect(name).toBeInTheDocument()
})
