import React from 'react'
import { theme } from '@hackclub/design-system'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Landing from 'components/summer-of-making/Landing'
import Run from 'components/summer-of-making/Run'
import Features from 'components/summer-of-making/Features'
import Timeline from 'components/summer-of-making/Timeline'
import Start from 'components/summer-of-making/Start'
import FAQ from 'components/summer-of-making/FAQ'

const styles = `
  body {
    width: 100%;
    max-width: 100vw;
    background: ${theme.colors.dark};
  }
  ::selection {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    text-shadow: none;
  }
`

const title = 'Summer of Making 2020 by Hack Club'
const desc =
  "Let's make something awesome this summer. Hack Club's Summer of Making empowers you to make that passion project a reality. No more putting it off, now is the time!"
export default () => (
  <Layout title={title} desc={desc} img="/cards/summer.png" path="/summer-of-making/">
    <style children={styles} />
    <Nav dark/>
    <Landing />
    <Features />
    <Timeline />
    <Run />
    <FAQ />
    <Start />
    <Footer dark />
  </Layout>
)
