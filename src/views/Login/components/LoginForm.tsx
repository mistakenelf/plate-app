import React, { useState } from 'react'

import TextField from '../../../components/TextField/TextField'

function LoginForm() {
  const [username, updateUsername] = useState('')
  return (
    <form>
      <TextField
        type="text"
        value={username}
        handleChange={e => updateUsername(e.target.value)}
      />
    </form>
  )
}

export default LoginForm
