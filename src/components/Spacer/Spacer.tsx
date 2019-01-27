import React from 'react'

import { Space } from './style'

interface SpacerProps {
  margin: string
  children: React.ReactNode
}

function Spacer({ margin, children }: SpacerProps) {
  return <Space margin={margin}>{children}</Space>
}

export default Spacer
