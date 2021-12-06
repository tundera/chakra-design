import { composeStories } from '@storybook/testing-react'
import { render, screen, waitFor } from '@chakra-design/test-utils'

import * as stories from 'stories/GridWithAddToCartButton.stories'

const { Default } = composeStories(stories)

test('renders GridWithAddToCartButton component', async () => {
  render(<Default />)

  await waitFor(() => {
    const content = screen.getByText(/Bamboo Tan/)

    expect(content).toBeInTheDocument()
  })
})
