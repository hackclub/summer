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
  Image,
  Avatar
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
    <Avatar
      size={64}
      src={icon}
      style={{ marginRight: '20px'}}
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

const SponsorModule = ({ url }) => (
  <Flex align="start" style={{px: 3, mt: [4, null, 3], mb: 3, mx: 'auto', maxWidth: 72}}>
    <Image
      src={url}
    />  
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
  <Base pt={[5, 6, 7]} pb={[4, 5, 6]} color="snow" bg="darker">
    <Modules px={3}>
      <Box align="center">
        <Headline>The Team</Headline>
        <Lead fontSize={[3, 4]} color="muted" maxWidth={48} mx={0} style={{textAlign:"center", margin: "auto"}}>
          Made by the community, for the community.
        </Lead>
      </Box>

      <Module
        icon="https://ca.slack-edge.com/T0266FRGM-USNPNJXNX-77cff696fecc-512"
        name="Sam Poder"
        body="sam@summer.hackclub.com"
      />
      
      <Module
        icon="https://ca.slack-edge.com/T0266FRGM-UNGNM3H9A-d31a2d1b4dac-512"
        name="Roshan Palakkal"
        body="roshan@summer.hackclub.com"
      />
      
      <Module
        icon="https://neelr.dev/static/self.jpg"
        name="Neel Redkar"
        body="neel@summer.hackclub.com"
      />

    </Modules>

    <br/>

    <br/>

    <Modules px={3}>

    <Box align="center" style={{textAlign:"center", margin: "auto"}}>

        <Lead fontSize={[3, 4]} color="muted" maxWidth={48} mx={0} style={{textAlign:"center", margin: "auto"}}>
          Proudly supported by:
        </Lead>
    
    </Box>

    
        

      <SponsorModule
        url="/GitHub_Logo_White.png"
      />

      <SponsorModule
        url="/GitHub_Logo_White.png"
      />

      <SponsorModule
        url="/GitHub_Logo_White.png"
      />
  

    </Modules>

  </Base>
)
