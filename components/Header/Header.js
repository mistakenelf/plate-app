// @flow

import Head from 'next/head';
import NProgress from 'nprogress';
import React from 'react';
import Router from 'next/router';

Router.onRouteChangeStart = url => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

type Props = {
  title?: string,
};

export default ({ title }: Props) => (
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
