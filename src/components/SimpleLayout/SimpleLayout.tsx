import React, { Fragment } from 'react'

interface SimpleLayoutProps {
  children: React.ReactNode
}

function SimpleLayout({ children }: SimpleLayoutProps) {
  return <Fragment>{children}</Fragment>
}

export default SimpleLayout
