<script>
  import firebase from 'firebase/app';
  import { navigateTo } from 'svelte-router-spa';

  import Input from '../../components/Input/Input';
  import Button from '../../components/Button/Button';
  import { firebaseUser } from '../../store/firebase';

  const handleRegister = async e => {
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(
          e.target.email.value,
          e.target.password.value,
        );

      firebase.auth().currentUser.updateProfile({
        displayName: `${e.target.firstName.value} ${e.target.lastName.value}`,
      });

      firebaseUser.set(res);

      navigateTo('/');
    } catch (e) {
      return e;
    }
  };
</script>

<div class="flex items-center justify-center h-full">
  <div class="rounded-lg bg-gray-700 shadow p-4">
    <div class="text-3xl mb-4 text-gray-300">Register</div>
    <form on:submit|preventDefault={handleRegister}>
      <div class="grid md:grid-flow-row md:grid-cols-2 gap-4 mb-6">
        <Input required label="First Name" id="firstName" type="text" />
        <Input required label="Last Name" id="lastName" type="text" />
      </div>
      <Input isFormField required label="Email" id="email" type="email" />
      <Input
        isFormField
        required
        label="Password"
        id="password"
        type="password" />
      <Button fullWidth label="Register" type="submit" />
    </form>
  </div>
</div>
