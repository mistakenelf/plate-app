<script>
  export let count;
  export let label;
</script>

<div
  class:bg-green-500={label === 'Completed'}
  class:bg-yellow-600={label === 'In Progress'}
  class:bg-blue-700={label === 'Open'}
  class="rounded shadow text-center text-white">
  <div class="px-2 md:px-6 py-2 md:py-4">
    <div class="font-bold text-xs md:text-xl mb-2">{label}</div>
    <div class="text-xl md:text-6xl">{count}</div>
  </div>
</div>
