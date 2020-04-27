import React, { Fragment } from 'react'
import styled from 'styled-components'
import {
  Box,
  Container,
  Flex,
  Icon,
  Avatar,
  Text,
  Badge,
  theme
} from '@hackclub/design-system'
import { Slide } from 'react-reveal'
import { Subhline, Lead } from 'components/Content'

const Timeline = styled(Flex).attrs({
  flexDirection: ['column', null, 'row'],
  justify: 'center'
})`
  position: relative;
`
const TimelineStep = styled(Flex).attrs({
  px: [null, null, 3, 4],
  flexDirection: ['row', null, 'column'],
  align: 'center'
})`
  border-radius: ${theme.pill};
  line-height: 1.125;
  max-width: 18rem;
  position: relative;
  z-index: 2;
  &:before {
    content: '';
    background: ${theme.colors.black};
    height: 100%;
    width: 4px;
    margin-left: 26px;
    position: absolute;
    z-index: -1;
  }
  &:first-of-type:before {
    top: 50%;
  }
  &:last-of-type:before {
    bottom: 50%;
  }
  ${theme.mediaQueries.md} {
    &:before {
      width: 100%;
      height: 4px;
      margin-left: 0;
      margin-top: 34px;
    }
    &:first-of-type:before {
      width: 50%;
      left: 50%;
      top: auto;
    }
    &:last-of-type:before {
      width: 50%;
      left: 0;
      bottom: auto;
    }
  }
`
const Circle = styled(Box).attrs({ p: 2, bg: 'primary', color: 'white' })`
  background-image: radial-gradient(
    ellipse farthest-corner at top left,
    ${theme.colors.orange[5]},
    ${theme.colors.red[5]},
    ${theme.colors.red[6]}
  );
  border-radius: ${theme.pill};
  display: inline-block;
  line-height: 0;
  z-index: 9999;
  ${theme.mediaQueries.md} {
    svg {
      width: 48px;
      height: 48px;
    }
  }
`

Timeline.Step = ({ icon, name, duration, mb = 4 }) => (
  <TimelineStep pb={mb}>
    <Slide left>
      <Circle mr={[3, null, 0]} mb={[null, null, 4]}>
        <Icon glyph={icon} size={32} />
      </Circle>
      <Box align={['left', null, 'center']}>
        <Badge
          bg="muted"
          color="darker"
          fontSize={[0, 2]}
          mb={[1, 2]}
          children={duration}
        />
        <Text color="white" fontSize={[3, 4]} children={name} />
      </Box>
    </Slide>
  </TimelineStep>
)

export default () => (
  <Box.section bg="darker" pt={[5, 6, 7]} pb={[4, 5]}>
    <Container align="center" maxWidth={36} px={3} mb={[4, 5, 6]}>
      <Subhline color="white">Timeline</Subhline>
      
    </Container>
    <Timeline px={3}>
      <Timeline.Step icon="send" name="Application Period" duration="May 1st to 31st" />
      <Timeline.Step icon="message-new" name="Application Results Released" duration="June 15th"/>
      <Timeline.Step icon="bolt" name="Get Making!" duration="June 21st" />
      <Timeline.Step icon="share" name="Completed Projects Showcased" duration="Aug. 1st" />
    </Timeline>
  </Box.section>
)
