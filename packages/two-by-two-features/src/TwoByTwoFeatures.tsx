import type { ReactElement } from 'react'

import { Box, SimpleGrid } from '@chakra-ui/react'

import { Feature } from './Feature'

type FeatureType = {
  title: string
  icon: ReactElement
  description: string
}

export type TwoByTwoFeaturesProps = {
  features: FeatureType[]
}

export const TwoByTwoFeatures = ({ features }: TwoByTwoFeaturesProps) => {
  return (
    <Box as="section" maxW="5xl" mx="auto" py="12" px={{ base: '6', md: '8' }}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacingX="10"
        spacingY={{ base: '8', md: '14' }}
      >
        {features.map(({ title, icon, description }) => (
          <Feature
            key={title}
            title={title}
            icon={icon}
            description={description}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}
