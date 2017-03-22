import React, { PropTypes } from "react";

import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = props => {
  const { title } = props;

  return (
    <Head>
      <title>Plate - {title}</title>
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
        href="https://fonts.googleapis.com/css?family=Fira+Sans"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/static/css/flexboxgrid.css" />
      <link rel="stylesheet" href="/static/css/nprogress.css" />
      <link rel="manifest" href="/static/manifest.json" />
    </Head>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
