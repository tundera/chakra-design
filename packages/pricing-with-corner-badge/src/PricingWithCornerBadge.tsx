import { Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { SiHive, SiMarketo, SiMicrosoft } from 'react-icons/si'

import { ActionButton } from './ActionButton'
import { PricingCard } from './PricingCard'

export type PricingWithCornerBadgeProps = {
  // children: ReactNode
}

export const PricingWithCornerBadge = ({}: PricingWithCornerBadgeProps) => {
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
          data={{
            price: '$29',
            name: 'Application UI',
            features: [
              'All application UI components',
              'Lifetime access',
              'Use on unlimited projects',
              'Free Updates',
            ],
          }}
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
          data={{
            price: '$49',
            name: 'Bundle',
            features: [
              'All application UI components',
              'Lifetime access',
              'Use on unlimited projects',
              'Use on unlimited projects',
              'Free Updates',
            ],
          }}
          icon={SiHive}
          button={<ActionButton>Buy now</ActionButton>}
        />
        <PricingCard
          data={{
            price: '$29',
            name: 'Marketing UI',
            features: [
              'All application UI components',
              'Lifetime access',
              'Use on unlimited projects',
              'Free Updates',
            ],
          }}
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
