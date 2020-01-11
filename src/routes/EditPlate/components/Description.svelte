<script>
  import Textarea from '../../../components/Textarea.svelte';

  export let description;
</script>

<Textarea
  name="description"
  rows={14}
  label="Description"
  isFormField
  on:change
  value={description} />
