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
  theme
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
    <Icon
      size={48}
      mr={3}
      glyph={icon}
      color="primary"
      style={{ flexShrink: 0 }}
    />
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
        <Headline>Make your dream a reality.</Headline>
        <Lead fontSize={[3, 4]} color="muted" maxWidth={48} mx={0}>
          We'll always be there for you and can't wait to see what you make!
          <br />
          Want something else integrated into the program? Let us know.
        </Lead>
      </Box>

      <Module
        icon="support"
        name="Mentorship"
        body="Every participant will be receiving their very own industry expert mentor to support them every step of the way. You'll have weekly digital meetings with your mentor."
      />
      
      <Module
        icon="help"
        name="Resources"
        body="Need something to make your project possible? Let us know on your application and we'll do our best to get it for you. You can also ping us at any time to ask."
      />
      <Module
        icon="web"
        name="Marketing Assistance"
        body="We'll promote your project through our channels as well as supporting you with your own marketing."
      />
      <Module
        icon="shirt"
        name="Swag"
        body="Need to ask about this will be given to those who complete."
      />
      <Module
        icon="mention"
        name="Priority Support"
        body="Our dedicated team of amazing people will always be there to support you! We'll have a private channel on Slack for communication."
      />
      <Module
        icon="payment"
        name="For Free"
        body="Did we forget to mention that this is all for free? No hidden charges, we solemnly swear."
      />
      
    </Modules>
  </Base>
)
