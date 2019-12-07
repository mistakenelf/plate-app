<script>
  import Input from '../../components/Input';
  import Button from '../../components/Button';
  import { auth } from '../../store/auth';

  const formValues = {
    email: '',
    password: '',
  };

  const handleChange = e => {
    formValues[e.target.name] = e.target.value;
  };

  const handleSubmit = () => {
    $auth
      .login(formValues.email, formValues.password)
      .then(response => {
        console.log('Success! Response: ' + JSON.stringify({ response }), form);
      })
      .catch(error => console.log('Failed :( ' + JSON.stringify(error), form));
  };
</script>

<div class="w-full h-full flex items-center justify-center p-4">
  <form
    class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full md:w-3/4
    lg:w-1/3 xl:w-1/4">
    <h1 class="text-3xl text-gray-800 mb-4 font-bold">Login</h1>
    <Input
      name="email"
      type="email"
      label="Email"
      isFormField
      placeholder="email address" />
    <Input
      name="password"
      type="password"
      label="Password"
      isFormField
      placeholder="password" />
    <Button type="submit" fullWidth>Login</Button>
  </form>
</div>
