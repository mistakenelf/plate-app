import React from 'react'

interface InputProps {
  type: string
  value: string
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void
}

function Input({ type, value, handleChange }: InputProps) {
  return <input type={type} value={value} onChange={handleChange} />
}

Input.defaultProps = {
  type: 'button',
  value: ''
}

export default Input
