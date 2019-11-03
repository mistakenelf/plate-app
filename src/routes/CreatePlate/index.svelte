<script>
  import Input from '../../components/Input'
  import Textarea from '../../components/Textarea'

  import SavePlateButton from './components/SavePlateButton'
</script>

<style>
  .container {
    padding: 20px;
  }
</style>

<svelte:head>
  <title>Plate - Create Plate</title>
</svelte:head>

<div class="container">
  <Input type="text" label="Name" isFormField placeholder="plate name" />
  <Textarea rows={10} label="Description" isFormField />
  <Input type="date" label="Due Date" isFormField />
</div>

<SavePlateButton />
