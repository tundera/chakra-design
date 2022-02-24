import type { InferGetStaticPropsType } from 'next'

import NextLink from 'next/link'
import {
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
} from '@chakra-ui/react'
import { allDocs } from '.contentlayer/data'

import { getLayout as getMainLayout } from 'src/layouts/MainLayout'
import { pick } from 'src/utils'

const ComponentsPage = ({
  components,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <SimpleGrid
      columns={[2, null, 3]}
      spacing="40px"
      w={{ base: 'full', md: 'container.lg' }}
      py="8"
    >
      {components.map((component) => (
        <LinkBox
          as="article"
          key={component.slug}
          border="4px black solid"
          rounded="lg"
          w="full"
          p="4"
        >
          <Heading as="h2" fontWeight="bold" fontSize="xl">
            <NextLink href={`/components/${component.slug}`} passHref>
              <LinkOverlay>{component.title}</LinkOverlay>
            </NextLink>
          </Heading>
          <Text color="gray.500">{component.kind}</Text>
        </LinkBox>
      ))}
    </SimpleGrid>
  )
}

ComponentsPage.getLayout = getMainLayout

export default ComponentsPage

export function getStaticProps() {
  const components = allDocs.map((doc) => pick(doc, ['slug', 'title', 'kind']))

  return { props: { components } }
}
