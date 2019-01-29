import React from 'react'

import { StyledButton } from './style'

interface ButtonProps {
  type: string
  children: React.ReactNode
}

function Button({ type, children }: ButtonProps) {
  return <StyledButton type={type}>{children}</StyledButton>
}

Button.defaultProps = {
  type: 'button'
}

export default Button
