<script>
  import Textarea from '../../../components/Textarea.svelte';

  export let description;
</script>

<div class="my-2 px-2 w-full overflow-hidden md:w-1/2 xl:my-2 xl:px-2">
  <Textarea
    name="description"
    rows={7}
    label="Description (can use markdown)"
    isFormField
    on:change
    value={description} />
</div>
