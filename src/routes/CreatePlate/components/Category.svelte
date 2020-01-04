<script>
  import Select from '../../../components/Select';

  export let category;
</script>

<div class="my-2 px-2 w-full overflow-hidden md:w-1/2 xl:my-2 xl:px-2">
  <Select
    name="category"
    id="category"
    label="Category"
    isFormField
    value={category}
    on:change>
    <option value="grocery">Groceries</option>
    <option value="work">Work</option>
    <option value="home">Home</option>
    <option value="school">School</option>
  </Select>
</div>
