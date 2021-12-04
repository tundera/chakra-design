import { Box, BoxProps, Img, Text } from '@chakra-ui/react'

interface QuoteeProps extends BoxProps {
  name: string
  jobTitle: string
  imageSrc: string
}

export const Quotee = ({
  name,
  jobTitle,
  imageSrc,
  ...boxProps
}: QuoteeProps) => {
  return (
    <Box {...boxProps}>
      <Img
        src={imageSrc}
        mx="auto"
        objectFit="cover"
        w="16"
        h="16"
        rounded="full"
      />
      <Box mt="3">
        <Text as="cite" fontStyle="normal" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {jobTitle}
        </Text>
      </Box>
    </Box>
  )
}
