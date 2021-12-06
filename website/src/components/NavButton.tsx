import type { FC } from 'react'

import NextLink from 'next/link'
import { Button, useColorModeValue } from '@chakra-ui/react'

interface Props {
  href: string
}

const NavButton: FC<Props> = ({ href, children }) => {
  const textColor = useColorModeValue('white', 'black')

  return (
    <NextLink href={href} passHref>
      <Button as="a" variant="ghost" w="100%" color={textColor}>
        {children}
      </Button>
    </NextLink>
  )
}

export default NavButton

export type { Props as NavButtonProps }
