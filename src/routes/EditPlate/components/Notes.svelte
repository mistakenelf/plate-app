<script>
  import Textarea from '../../../components/Textarea.svelte';

  export let notes;
</script>

<Textarea
  name="notes"
  rows={14}
  label="Notes"
  isFormField
  on:change
  value={notes} />
