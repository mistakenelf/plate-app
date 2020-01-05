<script>
  import page from 'page';

  import Input from '../../components/Input.svelte';
  import Button from '../../components/Button.svelte';
  import { register } from '../../store/auth';

  const formValues = {
    email: '',
    password: '',
  };

  const handleChange = e => {
    formValues[e.target.name] = e.target.value;
  };

  const handleSubmit = async () => {
    await register(formValues);
    page('/');
  };
</script>

<div class="w-full h-full flex items-center justify-center p-4">
  <form
    on:submit|preventDefault={handleSubmit}
    class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full md:w-3/4
    lg:w-1/2 xl:w-1/3">
    <h1 class="text-3xl text-gray-800 mb-4 font-bold">Register</h1>
    <Input
      name="email"
      type="email"
      label="Email"
      isFormField
      placeholder="email address"
      on:change={handleChange}
      value={formValues.email} />
    <Input
      name="password"
      type="password"
      label="Password"
      isFormField
      placeholder="password"
      on:change={handleChange}
      value={formValues.password} />
    <Button type="submit" fullWidth>Register</Button>
  </form>
</div>
