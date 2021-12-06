import type { FC } from 'react'
import type { GetLayoutFunction } from 'types'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Flex, Box, Button, Heading, Center, Spinner } from '@chakra-ui/react'

import Header from 'src/components/Header'
import Container from 'src/components/Container'
import Footer from 'src/components/Footer'

interface Props {
  title?: string
}

const MainLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `Chakra Design | ${title}` : 'Chakra Design'}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Chakra Design documentation" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <Flex minH="100vh" width="100vw" direction="column">
        <Header />
        <Container>{children}</Container>
        <Footer />
      </Flex>
    </>
  )
}

export default MainLayout

export const getLayout: GetLayoutFunction = (page) => {
  const Layout = dynamic(() => import('src/layouts/MainLayout'))

  return <Layout>{page}</Layout>
}
