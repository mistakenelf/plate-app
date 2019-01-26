import React, { useState } from 'react'
import Input from '../../../components/Input/Input'

function LoginForm() {
  const [username, updateUsername] = useState('')
  return (
    <form>
      <Input
        type="text"
        value={username}
        handleChange={e => updateUsername(e.target.value)}
      />
    </form>
  )
}

export default LoginForm
