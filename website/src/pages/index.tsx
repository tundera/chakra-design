import type { NextPage } from 'types'

import { Stack } from '@chakra-ui/react'

import CallToAction from 'src/components/CallToAction'
import { getLayout as getMainLayout } from 'src/layouts/MainLayout'

const HomePage: NextPage = () => {
  return (
    <Stack direction="column" align="center" w="full" spacing={4}>
      <CallToAction
        title="Chakra Design"
        subtitle="Design System for React"
        description="A complete design system for React applications built with Chakra UI"
        link={{ label: 'See Components', href: '/components' }}
      />
    </Stack>
  )
}

HomePage.getLayout = getMainLayout

export default HomePage
