<script>
  import Textarea from '../../../components/Textarea.svelte';

  export let notes;
</script>

<Textarea
  name="notes"
  rows={12}
  label="Notes"
  isFormField
  bind:textareaValue={notes} />
