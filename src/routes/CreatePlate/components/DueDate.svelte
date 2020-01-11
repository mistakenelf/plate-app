<script>
  import Input from '../../../components/Input.svelte';

  export let dueDate;
</script>

<Input
  name="dueDate"
  type="date"
  label="Due Date"
  isFormField
  fullWidth
  on:change
  value={dueDate} />
