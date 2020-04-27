import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Link as A,
  Text,
  theme,
  Card
} from '@hackclub/design-system'
import { Headline, Lead } from 'components/Content'

const Base = styled(Box.section).attrs({ bg: 'dark', color: 'gray.3' })``

const Modules = styled(Container)`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${theme.space[5]}px ${theme.space[4]}px;
    > div:first-child {
      grid-column: span 3;
    }
  }
`
Modules.defaultProps = {
  px: 3,
  mt: [4, null, 3],
  mb: 3,
  mx: 'auto',
  maxWidth: 72
}

const Module = ({ icon, name, body, ...props }) => (
  <Flex align="start" {...props}>
    <Box>
      <Heading.h3 color="snow" fontSize={3} mb={1} children={name} />
      <Text
        color="muted"
        fontSize={2}
        style={{ lineHeight: '1.375' }}
        children={body}
      />
    </Box>
  </Flex>
)

const ModuleDetails = styled(Box).attrs({
  bg: '#252429',
  color: 'smoke',
  mt: 2,
  ml: 3,
  py: 3,
  px: 2
})`
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.0625);
  border-radius: ${theme.radii[2]};
  ul {
    padding: 0;
    list-style: none;
  }
  li + li {
    margin-top: ${theme.space[2]}px;
  }
`

const ModuleDetailsDocument = styled(Flex.withComponent('li'))``

export default () => (
  <Base pt={[5, 6, 7]} pb={[4, 5, 6]} color="snow">
    <Modules px={3}>
      <Box>
        <Headline>Frequently Asked Questions</Headline>
      </Box>

      <Module
        name="Who can participate in the program?"
        body="The program is intended for people above 13 who are attending either a middle school or high school anywhere in the world. Too young? We can make exceptions on a case-by-case basis. Feel free to reach out!"
      />
      
      <Module
        name="My school starts while the program is going on. Can I still participate in the program?"
        body="For sure! Since the program is virtual, you should still be able to — and in fact, are encouraged to — work on the project once school resumes. That being said, we expect that you devote 100% effort throughout the program."
      />
      <Module
        name="I am going to a summer camp during the program. Can I still participate?"
        body="Certainly! Just make sure that you’ll be able to dedicate time to the project every week throughout the program."
      />
      <Module
        name="How will participants be meeting with mentors?"
        body="This program is 100% online, you'll be meeting through video call."
      />
      <Module
        name="How are participants paired with mentors?"
        body="Accepted participants will be paired with an industry expert mentor who shares similar interests. Want to make a cool video game? You’ll be paired with someone who is experienced with game design!"
      />
      <Module
        name="Who is running the competition?"
        body="The program is being run by Hack Club, a non profit network of computer science clubs where members learn to code through tinkering and building projects. It is the biggest such network and has gained the attention of tech luminaries like Elon Musk!"
      />
      
    </Modules>

    <Lead maxWidth={28} color="slate" fontSize={3} align="center" mt={[4, 5]}>
      Have more questions?
      <br />
      Contact us {' '}
      <A
        href="https://airtable.com/shrZYs8mqaCqKJ6Hl"
        target="_blank"
        color="primary"
        hoverline
      >
        here
      </A>
      .
    </Lead>
  </Base>
)
