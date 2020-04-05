<script>
  import firebase from 'firebase/app';
  import { navigateTo } from 'svelte-router-spa';

  import Input from '../../components/Input/Input';
  import Button from '../../components/Button/Button';
  import { firebaseUser } from '../../store/firebase';

  let email = '';
  let password = '';

  const handleLogin = async e => {
    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(
          e.target.email.value,
          e.target.password.value,
        );

      firebaseUser.set(res.user);

      navigateTo('/');
    } catch (e) {
      return e;
    }
  };
</script>

<div class="flex items-center justify-center h-full">
  <div class="rounded-lg bg-gray-700 shadow p-4">
    <div class="text-3xl mb-4 text-gray-300">Login</div>
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
