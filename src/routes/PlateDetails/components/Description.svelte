<script>
  export let description;
</script>

<div
  class="my-3 p-4 md:p-4 w-full overflow-hidden sm:w-full md:w-1/2 lg:w-1/2
  xl:w-1/2">
  <div class="p-4 rounded shadow bg-white">
    <h3 class="text-xl font-bold text-gray-700 mb-2 uppercase">Description</h3>
    {@html description}
  </div>
</div>
