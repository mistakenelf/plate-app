<script>
  export let count;
  export let label;
  export let status;
</script>

<div
  class:bg-green-500={status === 'completed'}
  class:bg-orange-500={status === 'in progress'}
  class:bg-blue-500={status === 'open'}
  class="rounded shadow text-center text-white">
  <div class="px-2 md:px-6 py-2 md:py-4">
    <div class="font-bold text-xs md:text-xl mb-2">{label}</div>
    <div class="text-xl md:text-6xl">{count}</div>
  </div>
</div>
