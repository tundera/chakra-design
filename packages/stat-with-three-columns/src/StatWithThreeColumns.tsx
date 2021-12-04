import type { StatType } from '../types'

import { Box, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react'

import { Stat } from './Stat'
import { StatLabel } from './StatLabel'
import { StatNumber } from './StatNumber'

export type StatWithThreeColumnsProps = {
  stats: StatType[]
}

export const StatWithThreeColumns = ({ stats }: StatWithThreeColumnsProps) => {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} p="10">
      <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
          {stats.map(({ label, value }) => (
            <Stat key={label}>
              <StatLabel>{label}</StatLabel>
              <StatNumber>{value}</StatNumber>
            </Stat>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
