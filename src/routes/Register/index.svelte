<script>
  import page from 'page';

  import TextField from '../../components/TextField.svelte';
  import PasswordField from '../../components/PasswordField.svelte';
  import EmailField from '../../components/EmailField.svelte';
  import Button from '../../components/Button.svelte';
  import authStore, { errorMessage } from '../../store/auth';
  import Meta from '../../components/Meta.svelte';

  let submitting = false;

  const formValues = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  };

  const handleSubmit = async () => {
    submitting = true;
    await authStore.register(formValues);
    submitting = false;
    page('/');
  };
</script>

<Meta
  title="Register"
  description="Welcome to Plate, a place to manage your stuff, register now to
  get started" />

<div class="w-full h-full flex items-center justify-center p-4">
  <form
    on:submit|preventDefault={handleSubmit}
    class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full md:w-3/4
    lg:w-1/2 xl:w-1/2">
    <h1 class="text-3xl text-gray-800 mb-4 font-bold">Register</h1>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 md:pr-2">
        <TextField
          required
          isFormField
          name="firstName"
          label="First Name"
          placeholder="first name"
          bind:textFieldValue={formValues.firstName} />
      </div>
      <div class="w-full md:w-1/2 md:pl-2">
        <TextField
          required
          isFormField
          name="lastName"
          label="Last Name"
          placeholder="last name"
          bind:textFieldValue={formValues.lastName} />
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 md:pr-2">
        <EmailField
          name="email"
          label="Email"
          isFormField
          required
          placeholder="email address"
          bind:emailFieldValue={formValues.email} />
      </div>
      <div class="w-full md:w-1/2 md:pr-2">
        <TextField
          required
          isFormField
          name="username"
          label="Username"
          placeholder="username"
          bind:textFieldValue={formValues.username} />
      </div>
    </div>
    <PasswordField
      name="password"
      label="Password"
      isFormField
      required
      placeholder="password"
      bind:passwordFieldValue={formValues.password} />
    <Button type="submit" fullWidth loading={submitting}>Register</Button>
    {#if $errorMessage}
      <div class="mt-4 bg-red-500 rounded p-2 font-bold text-white text-xl">
        {$errorMessage}
      </div>
    {/if}
  </form>
</div>
