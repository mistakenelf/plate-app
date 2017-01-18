import { Menu, Sidebar } from 'semantic-ui-react'
import React, { Component } from 'react'

import AuthenticatedMenu from './components/AuthenticatedMenu'
import Head from 'next/head'
import Navigation from '../navigation/Navigation'
import UnauthenticatedMenu from './components/UnauthenticatedMenu'
import { observer } from 'mobx-react'
import store from './store/store'

const MainLayout = observer(class MainLayout extends Component {
  openSidebar = () => {
    store.sidebarOpen = true
  }

  closeSidebar = () => {
    store.sidebarOpen = false
  }

  render() {
    return (
      <div>
        <style jsx global>{`
          html {
            margin: 0;
            padding: 5px;
            padding-top: 30px;
            font-family: sans-serif;
            background-color: #EFEFEF;
          }
        `}</style>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
          <meta name="theme-color" content="#00B5AD" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css"></link>
          <link rel="shortcut icon" href="/static/plateLogo.png" />
        </Head>
        <Sidebar
          as={Menu}
          animation='overlay'
          width='thin'
          visible={store.sidebarOpen}
          icon='labeled'
          color='teal'
          vertical
          inverted
        >
          {store.loggedIn
            ? <AuthenticatedMenu toggleSidebar={this.closeSidebar} />
            : <UnauthenticatedMenu toggleSidebar={this.closeSidebar} />
          }
        </Sidebar>
        <Sidebar.Pusher>
          <div>
            <Navigation toggleSidebar={this.openSidebar} />
            {this.props.children}
          </div>
        </Sidebar.Pusher>
      </div>
    )
  }
})

export default MainLayout
