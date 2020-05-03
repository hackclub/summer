import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from '@hackclub/design-system'
import BG from 'components/BG'

const meta = tags =>
  tags.map((props, index) =>
    React.createElement('meta', { ...props, key: index })
  )

export default ({
  title = 'Hack Club – Summer of Making',
  desc = 'Hack Club is a global nonprofit network of high school makers & student-led coding clubs where young people build the agency, the network, & the technical talent to think big & do big things in the world.',
  url = 'https://summer.hackclub.com',
  path = '/',
  img = 'https://cdn.glitch.com/a7605379-7582-4aac-8f44-45bbdfca0cfa%2Fhackclub.jpg?v=1587740807714',
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
      <link rel="manifest" href="https://assets.hackclub.com/favicons/site.webmanifest" />
      <meta name="application-name" content="Hack Club" />
      <meta name="apple-mobile-web-app-title" content="Hack Club" />
        
      <meta key="theme_color" name="theme-color" content={color} />
      <meta key="tile_color" name="msapplication-TileColor" content={color} />

      <link
        rel="mask-icon"
        href="https://assets.hackclub.com/favicons/safari-pinned-tab.svg"
        color={color}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://assets.hackclub.com/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://assets.hackclub.com/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://assets.hackclub.com/favicons/favicon-16x16.png"
      />
    </Helmet>
    {bg && <BG color={bg} />}
    {children}
  </ThemeProvider>
)
