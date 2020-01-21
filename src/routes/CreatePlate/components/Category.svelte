<script>
  import Select from '../../../components/Select.svelte';

  export let category;
</script>

<Select
  name="category"
  id="category"
  label="Category"
  isFormField
  bind:selectValue={category}>
  <option value="grocery">Groceries</option>
  <option value="work">Work</option>
  <option value="home">Home</option>
  <option value="school">School</option>
</Select>
