<script>
  import page from 'page';
  import { _ } from 'svelte-i18n';

  import authStore, { errorMessage } from '../../store/auth';
  import TextField from '../../components/TextField.svelte';
  import PasswordField from '../../components/PasswordField.svelte';
  import Button from '../../components/Button.svelte';

  let submitting = false;

  const formValues = {
    username: '',
    password: '',
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
    <h1 class="text-3xl text-gray-800 mb-4 font-bold">{$_('login.title')}</h1>
    <TextField
      name="username"
      label={$_('login.username')}
      isFormField
      required
      placeholder={$_('login.username')}
      bind:textFieldValue={formValues.username} />
    <PasswordField
      name="password"
      label={$_('login.password')}
      isFormField
      required
      placeholder={$_('login.password')}
      bind:passwordFieldValue={formValues.password} />
    <Button type="submit" fullWidth loading={submitting}>{$_('login.submitText')}</Button>
    {#if $errorMessage}
      <div class="mt-4 bg-red-500 rounded p-2 font-bold text-white text-xl">
        {$errorMessage}
      </div>
    {/if}
  </form>
</div>
