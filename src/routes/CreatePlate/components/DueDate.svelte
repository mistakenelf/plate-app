<script>
  import DatePicker from '../../../components/DatePicker.svelte';

  export let dueDate;
</script>

<DatePicker
  bind:dateValue={dueDate}
  name="dueDate"
  label="Due Date"
  isFormField
  fullWidth />
