import Head from 'next/head'
import Navigation from '../../modules/navigation/Navigation'

export default ({ children }) => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      <meta name="theme-color" content="#00B5AD" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css"></link>
      <link rel="shortcut icon" href="/static/plateLogo.png" />
    </Head>
    <Navigation />
    {children}
  </div>
)
