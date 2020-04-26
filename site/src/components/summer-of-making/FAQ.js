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




export default () => (
  <Base pt={[5, 6, 7]} pb={[4, 5, 6]} color="snow">
    <Box p={3} width={[1 / 2, 1 / 3, 1 / 4]}>
      <Card boxShadowSize="sm">
    
    <Box p={2} >
      <Heading fontSize={2} bold>
         Question
      </Heading>
      <Text fontSize={1} color="slate">
        Answer
      </Text>
    </Box>
    </Card>
    </Box>
    <Box p={3} width={[1 / 2, 1 / 3, 1 / 4]}>
      <Card boxShadowSize="sm">
    
    <Box p={2} >
      <Heading fontSize={2} bold>
         Question
      </Heading>
      <Text fontSize={1} color="slate">
        Answer
      </Text>
    </Box>
    </Card>
    </Box>
    <Box p={3} width={[1 / 2, 1 / 3, 1 / 4]}>
      <Card boxShadowSize="sm">
    
    <Box p={2} >
      <Heading fontSize={2} bold>
         Question
      </Heading>
      <Text fontSize={1} color="slate">
        Answer
      </Text>
    </Box>
    </Card>
    </Box>
    <Box p={3} width={[1 / 2, 1 / 3, 1 / 4]}>
      <Card boxShadowSize="sm">
    
    <Box p={2} >
      <Heading fontSize={2} bold>
         Question
      </Heading>
      <Text fontSize={1} color="slate">
        Answer
      </Text>
    </Box>
    </Card>
    </Box>
    <Box p={3} width={[1 / 2, 1 / 3, 1 / 4]}>
      <Card boxShadowSize="sm">
    
    <Box p={2} >
      <Heading fontSize={2} bold>
         Question
      </Heading>
      <Text fontSize={1} color="slate">
        Answer
      </Text>
    </Box>
    </Card>
    </Box>


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
