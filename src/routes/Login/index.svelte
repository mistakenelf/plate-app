<script>
  import page from 'page';
  import { _ } from 'svelte-i18n';

  import authStore, { errorMessage } from '../../store/auth';
  import Input from '../../components/Input/index.svelte';
  import Button from '../../components/Button/index.svelte';
  import Meta from '../../components/Meta/index.svelte';

  let submitting = false;
  let usernameError = false;
  let passwordError = false;

  const formValues = {
    username: '',
    password: '',
  };

  const handleChange = e => {
    if (e.target.name === 'username') {
      usernameError = false;
    }

    if (e.target.name === 'password') {
      passwordError = false;
    }

    formValues[e.target.name] = e.target.value;
  };

  const handleSubmit = async () => {
    if (formValues.username === '') {
      usernameError = true;
    }

    if (formValues.password === '') {
      passwordError = true;
    }

    if (formValues.username !== '' && formValues.password !== '') {
      submitting = true;
      await authStore.login(formValues);
      page('/');
      submitting = false;
    }
  };
</script>

<Meta
  title="Login"
  description="Welcome to Plate, a place to manage your stuff, login now to get
  started" />

<div class="flex items-center justify-center h-full">
  <form
    on:submit|preventDefault={handleSubmit}
    class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full md:w-3/4
    lg:w-1/2 xl:w-1/3 m-4">
    <h1 class="text-3xl text-gray-800 mb-4 font-bold">{$_('login.title')}</h1>
    <Input
      isFormField
      type="text"
      name="username"
      label={$_('login.username')}
      placeholder={$_('login.username')}
      hasError={usernameError}
      on:change={handleChange} />
    <Input
      isFormField
      type="password"
      name="password"
      label={$_('login.password')}
      placeholder={$_('login.password')}
      hasError={passwordError}
      on:change={handleChange} />
    <Button type="submit" fullWidth loading={submitting}>
      {$_('login.submitText')}
    </Button>
    <a class="flex justify-end text-blue-700 mt-4" href="/#!/register">
      {$_('login.dontHaveAnAccount')}
    </a>
    {#if $errorMessage}
      <div class="mt-4 bg-red-500 rounded p-2 font-bold text-white text-xl">
        {$errorMessage}
      </div>
    {/if}
  </form>
</div>
