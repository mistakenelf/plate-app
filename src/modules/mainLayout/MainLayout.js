import * as firebase from 'firebase'

import { Menu, Sidebar } from 'semantic-ui-react'
import React, { Component } from 'react'

import AuthenticatedMenu from './components/AuthenticatedMenu'
import Navigation from '../navigation/Navigation'
import UnauthenticatedMenu from './components/UnauthenticatedMenu'
import { observer } from 'mobx-react'
import store from './store/store'

const MainLayout = observer(class MainLayout extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        store.loggedIn = true
      } else {
        store.loggedIn = false
      }
    })
  }

  toggleSidebar = () => {
    store.sidebarOpen = !store.sidebarOpen
  }
  
  render() {
    return (
      <div>
        <Sidebar as={Menu} animation='overlay' width='thin' visible={store.sidebarOpen} icon='labeled' color='grey' vertical inverted>
          { store.loggedIn ? <AuthenticatedMenu toggleSidebar={this.toggleSidebar} /> : <UnauthenticatedMenu toggleSidebar={this.toggleSidebar} /> }
        </Sidebar>
        <Sidebar.Pusher>
          <div>
            <Navigation toggleSidebar={this.toggleSidebar} />
            {this.props.children}
          </div>
        </Sidebar.Pusher>
      </div>
    )
  }
})

export default MainLayout
