import React from 'react'
import styled from 'styled-components'
import {
  Flex,
  Box,
  Container,
  Icon,
  Text,
  theme
} from '@hackclub/design-system'
import { Subhline, Lead } from 'components/Content'
import { Fade } from 'react-reveal'
import Sheet from 'components/Sheet'

const Base = styled(Box.section).attrs({ bg: 'darker', px: 3, pb: [4, 5, 6] })``

const Main = styled(Flex.withComponent(Sheet)).attrs({
  flexDirection: ['column', null, 'row'],
  bg: '#252429',
  color: 'smoke',
  p: [3, 4, 5]
})`
  border-radius: ${theme.radii[2]};
  position: relative;
`

const List = styled(Text.withComponent('ol')).attrs({ pl: 0 })`
  list-style: none;
  li {
    line-height: 1.25;
    break-inside: avoid;
    display: flex;
    align-items: center;
    padding-bottom: ${theme.space[2]}px;
  }
  svg {
    flex-shrink: none;
  }
`

List.Item = ({ icon, body }) => (
  <Fade bottom>
    <li>
      <Icon glyph={icon} color="primary" size={32} mr={2} />
      <Text.span fontSize={[2, 3]} children={body} />
    </li>
  </Fade>
)

export default () => (
  <Base>
    <Main maxWidth={60}>
      <Container maxWidth={60} mx={0}>
        <Subhline>The making doesn’t stop after summer.</Subhline>
        <Lead color="muted" fontWeight={3}>
          Participating is just the start. You'll be part of an alumni of passionate makers like you and will have new found industry contacts.
        </Lead>
      </Container>
      
    </Main>
  </Base>
)
