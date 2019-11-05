<script>
  import Input from '../../components/Input'
  import Textarea from '../../components/Textarea'

  import SavePlateButton from './components/SavePlateButton'
</script>

<style>
  .container {
    padding: 20px;
  }

  h1 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  hr {
    margin-bottom: 40px;
  }

  .input-row {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
    grid-gap: 1rem;
  }
</style>

<svelte:head>
  <title>Plate - Create Plate</title>
</svelte:head>

<div class="container">
  <h1>Create a Plate</h1>
  <p>
    Create a new plate to get started. Once a new plate is created, you'll be
    able to go into the newly created plate and edit details, add new things,
    and start organizing your stuff.
  </p>
  <hr />
  <div class="input-row">
    <Input type="text" label="Name" isFormField placeholder="plate name" />
    <Input type="date" label="Due Date" isFormField />
  </div>
  <Textarea rows={10} label="Description" isFormField />
</div>

<SavePlateButton />
