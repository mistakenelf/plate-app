<script>
  import Select from '../../../components/Select.svelte';

  export let status;
</script>

<div class="my-2 px-2 w-full overflow-hidden md:w-1/2 xl:my-2 xl:px-2">
  <Select
    name="status"
    label="Status"
    id="status"
    isFormField
    value={status}
    on:change>
    <option value="open">Open</option>
    <option value="in progress">In Progress</option>
    <option value="complete">Complete</option>
  </Select>
</div>
