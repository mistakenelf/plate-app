import React, { PropTypes } from "react";

import Head from "next/head";

const Header = props => {
  return (
    <Head>
      <title>Plate - {props.title}</title>
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
      <link rel="shortcut icon" href="/static/img/plateLogo.png" />
      <link
        async
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
      <link
        rel="preload"
        href="/static/css/flexboxgrid.css"
        onLoad="this.rel='stylesheet'"
      />
      <link
        rel="preload"
        href="/static/css/nprogress.css"
        onLoad="this.rel='stylesheet'"
      />
      <link rel="manifest" href="/static/manifest.json" />
    </Head>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
