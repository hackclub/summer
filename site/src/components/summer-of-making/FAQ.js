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

const Document = ({ name, cost }) => (
  <ModuleDetailsDocument align={cost ? 'start' : 'center'}>
    <Icon
      size={28}
      mr={1}
      glyph="payment"
      color="success"
      style={{ flexShrink: 0 }}
    />
    <Box>
      <Text fontSize={2} children={name} />
      {cost && (
        <Text
          fontSize={1}
          color="muted"
          style={{ lineHeight: '1.375' }}
          children={cost}
        />
      )}
    </Box>
  </ModuleDetailsDocument>
)

const Laptop = styled.div`
  width: 100%;
  height: 100%;
  background-size: auto 115%;
  background-image: url('/bank/mac.png');
  background-position: center top;
  background-repeat: no-repeat;
  ${theme.mediaQueries.md} {
    grid-row: span 2;
    grid-column: span 2;
  }
`

export default () => (
  <Base pt={[5, 6, 7]} pb={[4, 5, 6]} color="snow">
    <Modules px={3}>
    <Card boxShadowSize="sm">
    
    <Box p={2}>
      <Heading fontSize={2} bold>
        {title}
      </Heading>
      <Text fontSize={1} color="slate">
        {text}
      </Text>
    </Box>
  </Card>
  <Card boxShadowSize="sm">
     
    <Box p={2}>
      <Heading fontSize={2} bold>
        {title}
      </Heading>
      <Text fontSize={1} color="slate">
        {text}
      </Text>
    </Box>
  </Card><Card boxShadowSize="sm">
     
    <Box p={2}>
      <Heading fontSize={2} bold>
        {title}
      </Heading>
      <Text fontSize={1} color="slate">
        {text}
      </Text>
    </Box>
  </Card><Card boxShadowSize="sm">
     
    <Box p={2}>
      <Heading fontSize={2} bold>
        {title}
      </Heading>
      <Text fontSize={1} color="slate">
        {text}
      </Text>
    </Box>
  </Card>
      
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
