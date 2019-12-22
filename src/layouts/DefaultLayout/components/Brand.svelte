<script>
  import page from 'page';
</script>

<div class="flex items-center h-full">
  <div
    class="w-16 cursor-pointer h-full flex justify-center items-center
    bg-gray-700"
    on:click={() => page('/')}>
    <div class="flex text-3xl mb-2">🍛</div>
  </div>
  <div
    class="ml-4 text-2xl cursor-pointer uppercase font-semibold text-white"
    on:click={() => page('/')}>
    Plate
  </div>
</div>
