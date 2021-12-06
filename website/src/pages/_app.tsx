import type { AppProps } from 'types'

import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@chakra-design/theme'

import '@fontsource/inter/variable.css'
import '@fontsource/fira-code/variable.css'

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Head>
        <title>{`Chakra Design | ${Component.displayName}`}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Chakra Design documentation" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <ChakraProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </>
  )
}

export default MyApp
