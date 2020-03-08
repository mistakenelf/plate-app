<script>
  import firebase from 'firebase/app';
  import page from 'page';

  import Input from '../../components/Input/Input';
  import Button from '../../components/Button/Button';

  let email = '';
  let password = '';

  const handleLogin = async e => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(
          e.target.email.value,
          e.target.password.value,
        );
      page('/');
    } catch (e) {
      return e;
    }
  };
</script>

<div class="flex items-center justify-center h-full">
  <div class="rounded-lg bg-white shadow p-4">
    <div class="text-3xl mb-4">Login</div>
    <form on:submit|preventDefault={handleLogin}>
      <Input isFormField required label="Email" id="email" type="email" />
      <Input
        isFormField
        required
        label="Password"
        id="password"
        type="password" />
      <Button fullWidth label="Login" type="submit" />
    </form>
  </div>
</div>
