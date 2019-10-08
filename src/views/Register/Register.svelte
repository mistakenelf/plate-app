<script>
  import { Link } from 'svelte-routing'
  import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle'

  import Button from '../../components/Button'
  import firebase, { app } from '../../lib/firebase'
  import Icon from '../../components/Icon'
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
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error)
      })
  }

  function handleGoogleRegister() {
    const authProvider = new firebase.auth.GoogleAuthProvider()
    app.auth().signInWithPopup(authProvider)
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
    background: var(--white);
    padding: 20px;
    border-radius: 3px;
  }

  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }

  .icon {
    cursor: pointer;
  }

  @media only screen and (min-width: 992px) {
    .login-form {
      width: 40%;
    }
  }
</style>

<svelte:head>
  <title>Plate - Register</title>
</svelte:head>

<div class="login-container">
  <form class="login-form" on:submit|preventDefault={handleSubmit}>
    <div class="header">Register</div>
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
    <Button variant="secondary" type="submit" fullWidth>Register</Button>
    <div class="footer">
      <div>
        <div class="icon">
          <Icon
            icon={faGoogle}
            width="1.5em"
            height="1.5em"
            fill="#DB4437"
            on:click={handleGoogleRegister} />
        </div>
      </div>
      <div>
        <Link to="/login">Already have an account?</Link>
      </div>
    </div>
  </form>
</div>
