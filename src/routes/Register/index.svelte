<script>
  import page from 'page';

  import Input from '../../components/Input.svelte';
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

  const errors = {
    firstName: false,
    lastName: false,
    email: false,
    username: false,
    password: false,
  };

  const handleChange = e => {
    if (errors[e.target.name] === true) {
      errors[e.target.name] = false;
    }

    formValues[e.target.name] = e.target.value;
  };

  const handleSubmit = async () => {
    if (formValues.email === '') {
      errors.email = true;
    }

    if (formValues.password === '') {
      errors.password = true;
    }

    if (formValues.username === '') {
      errors.username = true;
    }

    if (formValues.firstName === '') {
      errors.firstName = true;
    }

    if (formValues.lastName === '') {
      errors.lastName = true;
    }

    if (
      formValues.email !== '' &&
      formValues.password !== '' &&
      formValues.username !== '' &&
      formValues.firstName !== '' &&
      formValues.lastName !== ''
    ) {
      submitting = true;
      await authStore.register(formValues);
      submitting = false;
      page('/');
    }
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
        <Input
          isFormField
          type="text"
          name="firstName"
          label="First Name"
          placeholder="first name"
          hasError={errors.firstName}
          on:change={handleChange} />
      </div>
      <div class="w-full md:w-1/2 md:pl-2">
        <Input
          isFormField
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="last name"
          hasError={errors.lastName}
          on:change={handleChange} />
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 md:pr-2">
        <Input
          isFormField
          type="email"
          name="email"
          label="Email"
          placeholder="email address"
          hasError={errors.email}
          on:change={handleChange} />
      </div>
      <div class="w-full md:w-1/2 md:pr-2">
        <Input
          isFormField
          type="text"
          name="username"
          label="Username"
          placeholder="username"
          hasError={errors.username}
          on:change={handleChange} />
      </div>
    </div>
    <Input
      isFormField
      type="password"
      name="password"
      label="Password"
      placeholder="password"
      hasError={errors.password}
      on:change={handleChange} />
    <Button type="submit" fullWidth loading={submitting}>Register</Button>
    {#if $errorMessage}
      <div class="mt-4 bg-red-500 rounded p-2 font-bold text-white text-xl">
        {$errorMessage}
      </div>
    {/if}
  </form>
</div>
