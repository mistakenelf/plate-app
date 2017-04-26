import Head from 'next/head'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
      />
      <meta name="theme-color" content="#343f53" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <link
        rel="shortcut icon"
        href="https://res.cloudinary.com/knipferrc/image/upload/v1493208940/plateLogo_wa3wpi.png"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Fredericka+the+Great"
        rel="stylesheet"
      />
      <link
        href="https://res.cloudinary.com/knipferrc/raw/upload/flexboxgrid_lwjscm.css"
        rel="stylesheet"
      />
      <link
        href="https://res.cloudinary.com/knipferrc/raw/upload/nprogress_xgvrwm.css"
        rel="stylesheet"
      />
      <link rel="manifest" href="/static/manifest.json" />
    </Head>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
