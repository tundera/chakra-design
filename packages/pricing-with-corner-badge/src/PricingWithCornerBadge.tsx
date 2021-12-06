import type { PricingCardData } from 'types'

import { Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { SiHive, SiMarketo, SiMicrosoft } from 'react-icons/si'

import { ActionButton } from './ActionButton'
import { PricingCard } from './PricingCard'

export type PricingWithCornerBadgeProps = {
  cardsData: PricingCardData[]
}

export const PricingWithCornerBadge = ({
  cardsData,
}: PricingWithCornerBadgeProps) => {
  return (
    <Box
      as="section"
      bg={useColorModeValue('gray.50', 'gray.800')}
      py="14"
      px={{ base: '4', md: '8' }}
    >
      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        spacing={{ base: '8', lg: '0' }}
        maxW="7xl"
        mx="auto"
        justifyItems="center"
        alignItems="center"
      >
        <PricingCard
          data={cardsData[0]}
          icon={SiMicrosoft}
          button={
            <ActionButton variant="outline" borderWidth="2px">
              Buy now
            </ActionButton>
          }
        />
        <PricingCard
          zIndex={1}
          isPopular
          transform={{ lg: 'scale(1.05)' }}
          data={cardsData[1]}
          icon={SiHive}
          button={<ActionButton>Buy now</ActionButton>}
        />
        <PricingCard
          data={cardsData[2]}
          icon={SiMarketo}
          button={
            <ActionButton variant="outline" borderWidth="2px">
              Buy now
            </ActionButton>
          }
        />
      </SimpleGrid>
    </Box>
  )
}
