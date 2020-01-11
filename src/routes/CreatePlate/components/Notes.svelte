<script>
  import Textarea from '../../../components/Textarea.svelte';

  export let notes;
</script>

<div class="my-2 px-2 w-full overflow-hidden md:w-1/2 xl:my-2 xl:px-2">
  <Textarea
    name="notes"
    rows={14}
    label="Notes"
    isFormField
    on:change
    value={notes} />
</div>
