import React from 'react'

import { LayoutContainer } from './style'

interface SimpleLayoutProps {
  children: React.ReactNode
}

function SimpleLayout({ children }: SimpleLayoutProps) {
  return <LayoutContainer>{children}</LayoutContainer>
}

export default SimpleLayout
