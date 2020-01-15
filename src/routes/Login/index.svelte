<script>
  import page from 'page';

  import authStore, { errorMessage } from '../../store/auth';
  import Input from '../../components/Input.svelte';
  import Button from '../../components/Button.svelte';

  let submitting = false;

  const formValues = {
    username: '',
    password: '',
  };

  const handleChange = e => {
    formValues[e.target.name] = e.target.value;
  };

  const handleSubmit = async () => {
    submitting = true;
    await authStore.login(formValues);
    page('/');
    submitting = false;
  };
</script>

<svelte:head>
  <title>Plate - Login</title>
  <meta
    name="description"
    content="Welcome to Plate, a place to manage your stuff, login now to get
    started" />
</svelte:head>

<div class="w-full h-full flex items-center justify-center p-4">
  <form
    on:submit|preventDefault={handleSubmit}
    class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full md:w-3/4
    lg:w-1/2 xl:w-1/3">
    <h1 class="text-3xl text-gray-800 mb-4 font-bold">Login</h1>
    <Input
      name="username"
      type="text"
      label="Username"
      isFormField
      required
      placeholder="username"
      on:change={handleChange}
      value={formValues.username} />
    <Input
      name="password"
      type="password"
      label="Password"
      isFormField
      required
      placeholder="password"
      on:change={handleChange}
      value={formValues.password} />
    <Button type="submit" fullWidth loading={submitting}>Login</Button>
    {#if $errorMessage}
      <div class="mt-4 bg-red-500 rounded p-2 font-bold text-white text-xl">
        {$errorMessage}
      </div>
    {/if}
  </form>
</div>
