import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from '../__stories__/PricingWithCornerBadge.stories'

const { Default } = composeStories(stories)

test('renders PricingWithCornerBadge component', () => {
  render(<Default />)

  const content = screen.getByText(/PricingWithCornerBadge Component/i)

  expect(content).toBeInTheDocument()
})
