import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@chakra-design/test-utils'

import * as stories from '../__stories__/CardWithUserDetails.stories'

const { Default } = composeStories(stories)

test('renders CardWithUserDetails component', () => {
  render(<Default />)

  const heading = screen.getByRole('heading')

  expect(heading).toHaveTextContent('Account Info')
})
