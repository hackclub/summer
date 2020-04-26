import React from 'react'
import styled, { css } from 'styled-components'
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Link as A,
  Text,
  hexa,
  theme
} from '@hackclub/design-system'
import { Link } from 'gatsby'
import PureImagination from 'components/PureImagination'

const Base = styled(Box.withComponent('footer'))`
  background: ${props =>
    props.dark
      ? `${theme.colors.darker} radial-gradient(${hexa(
          theme.colors.black,
          1
        )} 1px, transparent 1px)`
      : `${theme.colors.snow} url('/pattern.svg') repeat`};
  ${props =>
    props.dark &&
    css`
      background-size: ${theme.space[4]}px ${theme.space[4]}px;
      h2 {
        color: ${theme.colors.gray[4]};
      }
      ${BottomLine} {
        border-color: ${theme.colors.black};
      }
    `} @media print {
    display: none;
  }
`

const Columns = styled(Container).attrs({ maxWidth: 48, mx: 0 })`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${theme.space[2]}px;
  > div:last-of-type {
    grid-column: span 2;
  }
  ${theme.mediaQueries.md} {
    grid-gap: ${theme.space[4]}px;
    grid-template-columns: repeat(3, 1fr);
    > div:last-of-type {
      grid-column: span 1;
    }
  }
`

const Services = styled(Flex)`
  a {
    line-height: 0;
  }
  svg {
    fill: currentColor;
    width: 32px;
    height: 32px;
  }
  ${theme.mediaQueries.md} {
    max-width: 12rem;
  }
`
Services.defaultProps = {
  align: 'center',
  mb: 3,
  wrap: true
}

const Service = ({ href, icon, ...props }) => (
  <A
    target="_blank"
    rel="noopener"
    href={href}
    mr={2}
    mb={2}
    color="muted"
    aria-label={`hack club on ${icon}`}
    children={<Icon glyph={icon} />}
    {...props}
  />
)

const Pages = styled(Box)`
  a {
    display: block;
    color: inherit;
    margin-bottom: ${theme.space[2]}px;
  }
`

const BottomLine = styled(Box)`
  border-top: 1px solid ${theme.colors.smoke};
`

const Footer = ({ dark = false, children, ...props }) => (
  <Base
    color={dark ? 'muted' : 'slate'}
    py={[4, 5, 6]}
    dark={dark}
    align="left"
    {...props}
  >
    {children}
    <PureImagination />
    <Container px={3}>
      <Box fontSize={2} mt={[3, 4]}>
        <Text>
          A Project by Hack Club
        </Text>
      </Box>
      <BottomLine mt={3}>
        <Text fontSize={1} mt={2} color="muted">
          © {new Date().getFullYear()} Hack Club. 501(c)(3) nonprofit (EIN:
          81-2908499)
        </Text>
      </BottomLine>
    </Container>
  </Base>
)

export default Footer
