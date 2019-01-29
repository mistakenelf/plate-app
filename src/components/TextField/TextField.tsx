import React from 'react'

import { Input, Label, Container } from './style'

interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  type: string
  value: string
  name: string
  placeholder?: string
  hasError: boolean
  label?: string
  onBlur(event: React.ChangeEvent<HTMLInputElement>): void
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

function TextField({
  type,
  value,
  name,
  placeholder,
  hasError,
  label,
  onBlur,
  onChange
}: TextFieldProps) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        hasError={hasError}
      />
    </Container>
  )
}

TextField.defaultProps = {
  type: 'text',
  hasError: false,
  value: ''
}

export default TextField
