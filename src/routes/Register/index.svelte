<script>
  import page from 'page';

  import Input from '../../components/Input.svelte';
  import Button from '../../components/Button.svelte';
  import authStore, { errorMessage } from '../../store/auth';

  let submitting = false;

  const formValues = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  };

  const handleChange = e => {
    formValues[e.target.name] = e.target.value;
  };

  const handleSubmit = async () => {
    submitting = true;

    await authStore.register(formValues);

    submitting = false;

    page('/');
  };
</script>

<svelte:head>
  <title>Plate - Register</title>
  <meta
    name="description"
    content="Welcome to Plate, a place to manage your stuff, register now to get
    started" />
</svelte:head>

<div class="w-full h-full flex items-center justify-center p-4">
  <form
    on:submit|preventDefault={handleSubmit}
    class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full md:w-3/4
    lg:w-1/2 xl:w-1/2">
    <h1 class="text-3xl text-gray-800 mb-4 font-bold">Register</h1>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 md:pr-2">
        <Input
          required
          isFormField
          name="firstName"
          type="text"
          label="First Name"
          placeholder="first name"
          on:change={handleChange}
          value={formValues.firstName} />
      </div>
      <div class="w-full md:w-1/2 md:pl-2">
        <Input
          required
          isFormField
          name="lastName"
          type="text"
          label="Last Name"
          placeholder="last name"
          on:change={handleChange}
          value={formValues.lastName} />
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 md:pr-2">
        <Input
          name="email"
          type="email"
          label="Email"
          isFormField
          required
          placeholder="email address"
          on:change={handleChange}
          value={formValues.email} />
      </div>
      <div class="w-full md:w-1/2 md:pr-2">
        <Input
          required
          isFormField
          name="username"
          type="text"
          label="Username"
          placeholder="username"
          on:change={handleChange}
          value={formValues.username} />
      </div>
    </div>
    <Input
      name="password"
      type="password"
      label="Password"
      isFormField
      required
      placeholder="password"
      on:change={handleChange}
      value={formValues.password} />
    <Button type="submit" fullWidth loading={submitting}>Register</Button>
    {#if $errorMessage}
      <div class="mt-4 bg-red-500 rounded p-2 font-bold text-white text-xl">
        {$errorMessage}
      </div>
    {/if}
  </form>
</div>
