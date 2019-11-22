<script>
  export let noteText = '';
  export let name = '';
</script>

<div class="p-4 bg-yellow-300">
  <div class="mb-4 text-md font-bold uppercase">Quick Note:</div>
  <textarea
    class="bg-transparent border-none w-full"
    {name}
    rows="6"
    placeholder="Write a note"
    on:change
    bind:value={noteText} />
</div>
