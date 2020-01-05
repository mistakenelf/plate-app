<script>
  import Input from '../../../components/Input.svelte';

  export let dueDate;
</script>

<div class="my-2 px-2 w-full overflow-hidden md:w-1/2 xl:my-2 xl:px-2">
  <Input
    name="dueDate"
    type="date"
    label="Due Date"
    isFormField
    fullWidth
    on:change
    value={dueDate} />
</div>
