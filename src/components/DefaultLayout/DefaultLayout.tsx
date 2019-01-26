import React, { Fragment } from 'react'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return <Fragment>{children}</Fragment>
}

export default DefaultLayout
