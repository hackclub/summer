import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from '@hackclub/design-system'
import BG from 'components/BG'

const meta = tags =>
  tags.map((props, index) =>
    React.createElement('meta', { ...props, key: index })
  )

export default ({
  title = 'Summer of Making (a Hack Club Community Initiative)',
  desc = 'Let\'s make something awesome this summer! Hack Club\'s Summer of Making empowers you to make that passion project a reality. No more putting it off, now is the time!',
  url = 'https://summer.hackclub.com',
  path = '/',
  img = 'https://summer.hackclub.com/cards/summer.png',
  color = '#ec3750',
  bg,
  children
}) => (
  <ThemeProvider webfonts>
    <Helmet title={title}>
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      {meta([
        { name: 'description', content: desc },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@hackclub' },
        { name: 'twitter:domain', content: url + '/' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: desc },
        { name: 'twitter:image', content: img },
        { property: 'og:site_name', content: 'Hack Club' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:image', content: img },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: url + path }
      ])}
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="application-name" content="Hack Club" />
      <meta name="apple-mobile-web-app-title" content="Hack Club" />
        
      <meta key="theme_color" name="theme-color" content={color} />
      <meta key="tile_color" name="msapplication-TileColor" content={color} />

      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color={color}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Helmet>
    {bg && <BG color={bg} />}
    {children}
  </ThemeProvider>
)
