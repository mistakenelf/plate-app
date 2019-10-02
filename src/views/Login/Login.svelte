<script>
  import Input from '../../components/Input'

  let email = ''
  let password = ''

  function handleEmailChange(e) {
    email = e.target.value
  }

  function handlePasswordChange(e) {
    password = e.target.value
  }

  function handleSubmit() {
    console.log(email, password)
  }
</script>

<style>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  .header {
    font-size: 2.5rem;
    margin-bottom: 30px;
    font-weight: 500;
  }

  .login-form {
    width: 90%;
  }

  @media only screen and (min-width: 992px) {
    .login-form {
      width: 40%;
    }
  }
</style>

<div class="login-container">
  <form class="login-form" on:submit|preventDefault={handleSubmit}>
    <div class="header">Login</div>
    <Input
      label="Email"
      type="email"
      isFormField
      on:change={handleEmailChange} />
    <Input
      label="Password"
      type="password"
      isFormField
      on:change={handlePasswordChange} />
    <button type="submit">Login</button>
  </form>
</div>
