import React, { Fragment } from 'react'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

import { ContentContainer } from './style'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <ContentContainer>{children}</ContentContainer>
    </Fragment>
  )
}

export default DefaultLayout
