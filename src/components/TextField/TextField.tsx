import React from 'react'

import { Input } from './style'

interface TextFieldProps {
  type: string
  value: string
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void
}

function TextField({ type, value, handleChange }: TextFieldProps) {
  return <Input type={type} value={value} onChange={handleChange} />
}

TextField.defaultProps = {
  type: 'text',
  value: ''
}

export default TextField
