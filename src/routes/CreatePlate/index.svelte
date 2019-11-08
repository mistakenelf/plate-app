<script>
  import Input from '../../components/Input'
  import Textarea from '../../components/Textarea'
  import { db } from '../../store/db'

  import SavePlateButton from './components/SavePlateButton'

  let formValues = {
    name: '',
    dueDate: '',
    description: ''
  }

  function handleChange(e) {
    formValues[e.target.name] = e.target.value
  }

  async function handleSubmit() {
    await $db.collections.plates.insert({
      id: new Date().getTime().toString(),
      ...formValues
    })
  }
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
    <Input
      name="name"
      type="text"
      label="Name"
      isFormField
      placeholder="plate name"
      on:change={handleChange}
      value={formValues.name} />
    <Input
      name="dueDate"
      type="date"
      label="Due Date"
      isFormField
      fullWidth
      on:change={handleChange}
      value={formValues.dueDate} />
  </div>
  <Textarea
    name="description"
    rows={10}
    label="Description"
    isFormField
    on:change={handleChange}
    value={formValues.description} />
</div>

<form on:submit|preventDefault={handleSubmit}>
  <SavePlateButton />
</form>
