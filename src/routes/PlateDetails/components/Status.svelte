<script>
  export let status;
</script>

<div
  class:bg-green-500={status === 'complete'}
  class:bg-yellow-400={status === 'in progress'}
  class:bg-blue-700={status === 'open'}
  class="rounded text-white shadow bg-white md:h-full flex items-center
  justify-center mb-6 md:md-0 text-5xl">
  {status}
</div>
