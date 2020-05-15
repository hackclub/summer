import React from 'react'
import styled, { css } from 'styled-components'
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  LargeButton,
  // OutlineButton,
  Link as A,
  Section,
  Text,
  Sheet,
  theme
} from '@hackclub/design-system'
// import getSeason from '@hackclub/season'
import Link from 'components/Link'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
// import AnnouncementBanner from 'components/AnnouncementBanner'
import Photo from 'components/Photo'
import { Headline, Highlight, Lead } from 'components/Content'
import Footer from 'components/Footer'

const FeatureLink = styled(A).attrs({
  mt: 3,
  fontSize: 3,
  hoverline: true,
  chevronRight: true
})`
  display: block;
`
FeatureLink.link = FeatureLink.withComponent(Link)

const CTA = styled(LargeButton.withComponent(Link)).attrs({
  chevronRight: true,
  bg: ['warning', 'primary'],
  fontSize: [2, 3],
  m: [1, 2],
  scale: true
})`
  background-image: ${(props) => theme.gradient(props.bg[0], props.bg[1])};
  text-transform: uppercase;
`
// const SecondaryCTA = styled(OutlineButton.withComponent(Link)).attrs({
//   chevronRight: true,
//   bg: 'white',
//   color: 'black',
//   fontSize: 2,
//   m: [1, 2],
//   scale: true
// })`
//   background-color: rgba(0, 0, 0, 0.325);
//   text-transform: uppercase;
// `

const shadows = css`
  h1,
  h2,
  h3,
  p,
  li,
  ${FeatureLink} {
    color: ${theme.colors.white};
    text-shadow: 0 1px 4px rgba(0, 0, 0, 1);
  }
`

const photoSection = css`
  border-radius: ${theme.radii[2]};
  background-size: cover;
  @media (hover: hover) {
    background-attachment: fixed;
  }
`
const PhotoHeader = styled(Section).attrs({ px: 0 })`
  background-color: ${theme.colors.primary};
  background-image: linear-gradient(
      ${(props) =>
        props.inverted
          ? 'rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)'
          : 'rgba(0, 0, 0, 0.325), rgba(0, 0, 0, 0.5)'}
    ),
    url(${(props) => props.src});
  background-position: center;
  ${photoSection};
  ${shadows};
`

const featureStyles = css`
  min-height: 24rem;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  p:first-child,
  h3 {
    line-height: 1.25;
  }
`
const TextFeature = styled(Sheet)`
  > p {
    font-weight: bold;
    font-size: ${theme.fontSizes[5]}px;
    line-height: 1.25;
  }
`
const PhotoFeature = styled(TextFeature).attrs({
  color: 'white'
})`
  position: relative;
  ${(props) =>
    props.inverted
      ? css`
          justify-content: flex-end !important;
          background-image: linear-gradient(
              transparent,
              rgba(0, 0, 0, 0.25) 50%,
              rgba(0, 0, 0, 0.5) 100%
            ),
            url(${props.src});
        `
      : css`
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0) 50%
            ),
            url(${props.src});
        `};
  background-position: center;
  background-size: cover;
  ${shadows};
  + ${Text} {
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes[3]}px;
    margin-top: ${theme.space[3]}px;
  }
`
const MarketingFeature = styled(Sheet)`
  background-color: ${theme.colors.indigo[5]};
  background-image: ${theme.gradient('indigo.4', 'indigo.6')};
  position: relative;
  overflow: visible;
  ${Icon} {
    margin-left: -${theme.space[1]}px;
  }
  &:before,
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`

const Module = ({ icon, name, body, color = 'white', ...props }) => (
  <Flex flexDirection="column" color={color} {...props}>
    {icon && (
      <Icon
        size={64}
        mb={2}
        glyph={icon}
        color={props.iconColor || color}
        style={{ flexShrink: 0 }}
      />
    )}
    <Box>
      <Heading.h3 mb={1} fontSize={5} children={name} />
      <Text fontSize={4} style={{ lineHeight: '1.375' }} children={body} />
    </Box>
  </Flex>
)

const Cols = styled(Box)`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  ${theme.mediaQueries.sm} {
    grid-gap: ${theme.space[4]}px;
    grid-template-columns: ${(props) => props.cols};
  }
  > div,
  > section > div {
    ${featureStyles};
  }
`
Cols.defaultProps = {
  cols: '1fr 1fr',
  my: [3, 4]
}

const Steps = styled(Box)`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  ${theme.mediaQueries.md} {
    grid-gap: ${theme.space[4]}px;
    grid-template-columns: repeat(3, 1fr);
  }
  > div {
    ${featureStyles};
  }
`

const HourFeatures = styled(Steps)`
  section div {
    min-height: 32rem;
    justify-content: flex-start;
  }
  div + p {
    margin-bottom: ${theme.space[4]}px;
  }
`

const ApplyButton = styled(LargeButton).attrs({
  scale: true,
  chevronRight: true
})`
  text-transform: uppercase;
  background-image: ${theme.gradient('warning', 'primary')};
`
const StepOne = styled(Sheet)`
  background-color: ${theme.colors.red[6]};
  background-image: linear-gradient(
    to bottom,
    ${theme.colors.orange[5]},
    ${theme.colors.pink[6]}
  );
`
const StepTwo = styled(Sheet)`
  background-color: ${theme.colors.violet[6]};
  background-image: linear-gradient(
    to bottom,
    ${theme.colors.fuschia[5]},
    ${theme.colors.indigo[6]}
  );
`
const StepThree = styled(Sheet)`
  background-color: ${theme.colors.teal[6]};
  background-image: linear-gradient(
    to bottom,
    ${theme.colors.cyan[5]},
    ${theme.colors.blue[6]}
  );
`

const SectionEyebrow = styled(Text).attrs({
  fontSize: [4, 5],
  bold: true,
  color: 'muted'
})``
const SectionHeadline = styled(Headline).attrs({
  fontSize: [6, 7, 8],
  mt: 2,
  mb: 3
})`
  line-height: 1;
`
const SectionLead = styled(Lead).attrs({
  fontSize: [3, 4],
  maxWidth: 48,
  mx: 0,
  pb: 3,
  mb: [4, 5]
})``

const like = { underline: true, target: '_blank' }
A.link = A.withComponent(Link)
const Like = (props) => <A {...like} {...props} />

const contentContainer = {
  maxWidth: 72,
  width: 1,
  p: 3,
  color: 'black'
}

const title = 'Hack Club'
const desc =
  'Learn how to start a coding club at your high school through Hack Club. Get programming club ideas, curriculum, activities, and more.'

const OnlyDesktop = styled.span`
  display: none;
  ${theme.mediaQueries.md} {
    display: initial;
  }
`

export default () => (
  <Flex flexDirection="column" bg="snow" py={[5, 6]}>
      <Cols cols="2fr 3fr">
        <MarketingFeature>
          <Module
            icon="sticker"
            name="Stickers!"
            body="We’ll ship your club a box of our famous stickers for successful marketing from day one."
            color="white"
          />
          {/* <FeatureLink to="/stickers" color="white">
            Get a sample pack
          </FeatureLink> */}
        </MarketingFeature>
        <PhotoFeature src="https://hackclub.com/start/call.jpg" inverted>
          <Text color="white">
            Talk to our team over a call or on Slack for{' '}
            <Text.span color="success">guidance & assistance</Text.span>{' '}
            whenever you need it.
          </Text>
        </PhotoFeature>
      </Cols>
  </Flex>
 )
