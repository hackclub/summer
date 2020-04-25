import React from 'react'
import styled from 'styled-components'
import {
  Container,
  Flex,
  Heading,
  Link as A,
  Button,
  theme
} from '@hackclub/design-system'
import { Lead } from 'components/Content'
import Fade from 'react-reveal/Fade'
import ScrollHint from './ScrollHint'

const Slide = styled(Flex).attrs({
  flexDirection: 'column',
  justify: 'end',
  bg: 'snow',
  width: '100vw'
})`
  background: url('/summer.jpg');
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  position: relative;
  h1 {
    line-height: 1.125;
    letter-spacing: -0.02em;
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  }
  p {
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  }
`

const Vignette = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.25) 25%,
    rgba(0, 0, 0, 0.625) 50%,
    rgba(0, 0, 0, 0.75) 100%
  );
  height: 30vh;
  left: 0;
  right: 0;
  position: absolute;
  bottom: 0;
`

const Underline = styled.span`
  background-image: url(${require('../../../static/underline-alt.svg')});
  background-repeat: no-repeat;
  background-size: 100% 1rem;
  background-position: bottom center;
`

const LocationPill = styled(Flex).attrs({
  fontSize: 1,
  py: 1,
  px: 3,
  mb: [3, 4],
  color: 'dark'
})`
  z-index: 1;
  border-radius: ${theme.pill};
  background: rgba(255, 255, 255, 0.875);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    background: rgba(255, 255, 255, 0.5) !important;
    -webkit-backdrop-filter: saturate(180%) blur(2px);
  }
  ${theme.mediaQueries.reduceTransparency} {
    background: ${theme.colors.muted} !important;
  }
`

export default () => (
  <Slide>
    <Vignette />
    <Container
      pt={[7,8]}
      pb={[4, 5]}
      px={3}
      align="center"
      color="white"
      maxWidth={75}
      style={{ zIndex: 100 }}
    >
      <Fade bottom>
        <Heading.h1 fontSize={[6, 7, 8, 9]}>
          Let's make something <Underline>awesome</Underline> this{' '}
          <Underline>summer</Underline>.
        </Heading.h1>
        <Lead maxWidth={48} my={4} fontSize={[3, 4]} font-weight={250}>
          
          Hack Club's Summer of Making empowers you to make that passion project a reality. No more putting it off, now is the time!
          
        </Lead>
      </Fade>
      <Flex justify="center" align="center">
        <Button href="#apply">Applications Opening May 1st</Button>
      </Flex>
      
    </Container>
    <ScrollHint />

    
  </Slide>
)
