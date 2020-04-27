import React from 'react'
import styled from 'styled-components'
import { Box, Container, Flex, Text, LargeButton, Link, theme } from '@hackclub/design-system'
import { Fade } from 'react-reveal'
import { Headline, Subhline, Lead } from 'components/Content'
import Sheet from 'components/Sheet'
import Form from 'components/summer-of-making/Signup'

const Grid = styled(Container).attrs({ maxWidth: 48 })`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  align-items: start;
  ${theme.mediaQueries.md} {
    grid-gap: ${theme.space[5]}px;
    grid-template-columns: 3fr 2fr;
  }
`

const Timeline = styled(Flex).attrs({
  flexDirection: 'column'
})`
  line-height: 1.125;
  position: relative;
  &:before {
    content: '';
    background-image: linear-gradient(
      to bottom,
      ${theme.colors.dark} 0%,
      ${theme.colors.slate} 15%,
      ${theme.colors.slate} 85%,
      ${theme.colors.dark} 100%
    );
    height: 100%;
    width: 3px;
    margin-left: 4px;
    position: absolute;
  }
`
const TimelineStep = styled(Flex).attrs({
  align: 'center',
  pt: props => (props.first ? 0 : [2, 3])
})`
  line-height: 1.125;
`
const Circle = styled(Box).attrs({ p: 1, bg: 'primary', color: 'white' })`
  border-radius: ${theme.pill};
  display: inline-block;
  line-height: 0;
`

Timeline.Step = ({ name, duration, first = false }) => (
  <Fade top>
    <TimelineStep first={first}>
      <Circle mr={3} />
      <Box align="left">
        <Text color="muted" fontSize={0} caps children={duration} />
        <Text color="smoke" fontSize={3} children={name} />
      </Box>
    </TimelineStep>
  </Fade>
)

export default () => (
  <Box.section bg="darker" py={[5, 6, 7]} id="apply">
    <Container maxWidth={48} px={3} align="center">
      <Headline color="white" mb={2}>
        Apply for Hack Club's Summer of Making Program.
      </Headline>
      <Lead maxWidth={32} color="muted">
        Open to <strong>all</strong> teenagers aged 13 to 18.
      </Lead>
    </Container>
    <Grid mt={[4, 5]} mb={[3, 4]} px={3}>
      <Fade bottom>
        <Sheet bg="#252429" color="snow" maxWidth={32} p={[3, 4, 5]}>
          <Subhline fontSize={[3, 4]} mb={[4, 5]}>
            Your Application
          </Subhline>
          <Form />
          <Link href = "https://airtable.com/shrm8k5H6qnKY0m5q"><LargeButton width={1} my={4} bg="success">Volunteer as a Mentor</LargeButton></Link>
        </Sheet>
      </Fade>
      <div>
        <Timeline>
          <Timeline.Step icon="send" name="Apply" duration="Right now" first />
          <Timeline.Step name="Application Results" duration="On June 15th" />
          <Timeline.Step name="Meet your Mentor" duration="That Same Week" />
          <Timeline.Step name="Get Making!" duration="This Summer" />
        </Timeline>
        
      </div>
    </Grid>
    
  </Box.section>
)
