<script>
  import { login } from '../../store/auth';
  import Input from '../../components/Input';
  import Button from '../../components/Button';

  const formValues = {
    email: '',
    password: '',
  };

  const handleChange = e => {
    formValues[e.target.name] = e.target.value;
  };

  const handleSubmit = async () => {
    await login(formValues);
  };
</script>

<div class="w-full h-full flex items-center justify-center p-4">
  <form
    on:submit|preventDefault={handleSubmit}
    class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full md:w-3/4
    lg:w-1/2 xl:w-1/3">
    <h1 class="text-3xl text-gray-800 mb-4 font-bold">Login</h1>
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
    <Button type="submit" fullWidth>Login</Button>
  </form>
</div>
